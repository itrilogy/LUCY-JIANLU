import React, { useCallback, useEffect, useReducer, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import Tooltip from '@/components/Tooltip'
import useKeySounds from '@/hooks/useKeySounds'
import { articleTypingConfigAtom, currentArticleAtom, galleryMainModeAtom } from '@/store'
import { parseArticleSource } from '@/utils/articleParser'
import { useAtomValue, useSetAtom } from 'jotai'
import { buildEnterPayload, buildTabPayload, isCharMatch } from './charMatch'
import ArticleResultModal from './components/ArticleResultModal'
import ArticleSpeed from './components/ArticleSpeed'
import ArticleSwitcher from './components/ArticleSwitcher'
import { CodeEditorView } from './components/CodeEditorView'
import { articleTypingReducer, initialArticleTypingState } from './store'

export const ArticleTypingPage: React.FC = () => {
  const currentResource = useAtomValue(currentArticleAtom)
  const articleConfig = useAtomValue(articleTypingConfigAtom)
  const setGalleryMainMode = useSetAtom(galleryMainModeAtom)
  const [state, dispatch] = useReducer(articleTypingReducer, initialArticleTypingState)
  const [playClickSound, playWrongSound] = useKeySounds()

  const inputRef = useRef<HTMLTextAreaElement>(null)
  const isComposingRef = useRef(false)
  const stateRef = useRef(state)
  stateRef.current = state

  // 载入 / 切换文章，或 skipComments 变更时重新解析
  useEffect(() => {
    if (!currentResource) return
    try {
      const parsed = parseArticleSource(
        currentResource.id,
        currentResource.name,
        currentResource.content || '',
        currentResource.codeLanguage || 'javascript',
        { skipComments: articleConfig.skipComments },
      )
      dispatch({
        type: 'LOAD_ARTICLE',
        payload: { article: parsed, config: articleConfig },
      })
      setTimeout(() => inputRef.current?.focus(), 100)
    } catch (err) {
      console.error('解析代码文章资源失败:', err)
    }
    // 仅 skipComments 触发重载 target；其余配置走 SYNC
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentResource, articleConfig.skipComments])

  // 非 skipComments 的配置变更：同步 runtime，不重置进度
  useEffect(() => {
    dispatch({ type: 'SYNC_CONFIG', payload: articleConfig })
  }, [articleConfig])

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined
    if (state.isTyping) {
      timer = setInterval(() => {
        dispatch({ type: 'TICK_TIMER' })
      }, 500)
    }
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [state.isTyping])

  useEffect(() => {
    const onBlur = () => {
      dispatch({ type: 'PAUSE_TYPING' })
    }
    window.addEventListener('blur', onBlur)
    return () => window.removeEventListener('blur', onBlur)
  }, [])

  const handleContainerClick = () => {
    if (!stateRef.current.isFinished) {
      inputRef.current?.focus()
    }
  }

  const appendWithSound = useCallback(
    (payload: string) => {
      const s = stateRef.current
      if (s.isFinished || !s.targetText || !payload) return

      const offset = s.userInputBuffer.length
      const opts = { ignoreCase: s.runtimeConfig.ignoreCase }
      let hasWrong = false
      for (let i = 0; i < payload.length; i++) {
        const targetChar = s.targetText[offset + i]
        if (targetChar === undefined) break
        if (!isCharMatch(targetChar, payload[i], opts)) {
          hasWrong = true
          break
        }
      }

      dispatch({ type: 'APPEND_INPUT', payload })
      playClickSound()
      if (hasWrong) playWrongSound()
    },
    [playClickSound, playWrongSound],
  )

  const handleCompositionStart = () => {
    isComposingRef.current = true
  }

  const handleCompositionEnd = (e: React.CompositionEvent<HTMLTextAreaElement>) => {
    isComposingRef.current = false
    const s = stateRef.current
    const composedData = e.data

    if (!s.isTyping && !s.isFinished && s.userInputBuffer.length === 0) {
      dispatch({ type: 'START_TYPING' })
      if (inputRef.current) inputRef.current.value = ''
      return
    }

    if (!s.isTyping && !s.isFinished) {
      dispatch({ type: 'START_TYPING' })
    }

    if (composedData) {
      appendWithSound(composedData)
    }
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      isComposingRef.current ||
      e.nativeEvent.isComposing ||
      e.key === 'Process' ||
      e.keyCode === 229
    ) {
      return
    }

    const { key, ctrlKey, metaKey } = e
    const s = stateRef.current
    const cfg = s.runtimeConfig

    if (key === 'Escape') {
      e.preventDefault()
      if (s.isFinished) return
      dispatch({ type: 'PAUSE_TYPING' })
      return
    }

    if (s.isFinished) {
      return
    }

    // 准备态：任意键只揭开遮罩
    if (!s.isTyping && s.userInputBuffer.length === 0) {
      if (key === 'Shift' || key === 'Control' || key === 'Alt' || key === 'Meta' || key === 'CapsLock') {
        return
      }
      e.preventDefault()
      dispatch({ type: 'START_TYPING' })
      return
    }

    if (!s.isTyping) {
      dispatch({ type: 'START_TYPING' })
    }

    if ((ctrlKey || metaKey) && key === 'Backspace') {
      e.preventDefault()
      dispatch({ type: 'DELETE_WORD' })
      playClickSound()
      return
    }

    if (ctrlKey || metaKey) return

    if (key === 'Backspace') {
      e.preventDefault()
      dispatch({ type: 'HANDLE_BACKSPACE' })
      playClickSound()
      return
    }

    if (key === 'Enter') {
      e.preventDefault()
      const payload = buildEnterPayload(s.targetText, s.userInputBuffer, cfg.smartIndent)
      if (payload) appendWithSound(payload)
      return
    }

    if (key === 'Tab') {
      e.preventDefault()
      appendWithSound(buildTabPayload(cfg.tabWidth))
      return
    }

    if (key.length === 1) {
      e.preventDefault()
      appendWithSound(key)
    }
  }

  const handleReset = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    dispatch({ type: 'RESET' })
    dispatch({ type: 'START_TYPING' })
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  const handleCloseResult = () => {
    dispatch({ type: 'RESET' })
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  const handleOpenGallery = () => {
    setGalleryMainMode('article')
  }

  return (
    <Layout>
      {state.isFinished && (
        <ArticleResultModal
          articleName={currentResource?.name || '文章练习'}
          state={state}
          onRestart={handleReset}
          onClose={handleCloseResult}
        />
      )}

      <div
        className="container mx-auto flex h-full flex-1 flex-col pb-6 select-none cursor-text"
        onClick={handleContainerClick}
      >
        <textarea
          ref={inputRef}
          className="opacity-0 absolute top-0 left-0 w-1 h-1 pointer-events-none"
          onKeyDown={handleKeyDown}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          autoFocus
          aria-label="文章练习输入"
        />

        <Header>
          <Tooltip content="切换到单词练习">
            <NavLink
              className="block rounded-lg px-3 py-1 text-lg transition-colors duration-300 ease-in-out hover:bg-indigo-400 hover:text-white focus:outline-none dark:text-white dark:text-opacity-60 dark:hover:text-opacity-100 font-medium"
              to="/"
            >
              🔤 单词
            </NavLink>
          </Tooltip>

          <Tooltip content="选择文章 / 代码字典">
            <NavLink
              className="block rounded-lg px-3 py-1 text-lg transition-colors duration-300 ease-in-out hover:bg-indigo-400 hover:text-white focus:outline-none dark:text-white dark:text-opacity-60 dark:hover:text-opacity-100 font-medium"
              to="/gallery?mode=article"
              state={{ from: 'article' as const }}
              onClick={handleOpenGallery}
            >
              📄 {currentResource?.name || '代码/文章字典'}
            </NavLink>
          </Tooltip>

          <ArticleSwitcher onOpenSetting={() => dispatch({ type: 'PAUSE_TYPING' })} />

          <Tooltip content={state.isTyping ? '暂停（Esc）' : '开始 / 继续'}>
            <button
              className={`my-btn-primary h-8 w-auto px-3 text-sm shadow ${
                state.isTyping ? 'bg-gray-400 hover:bg-gray-500' : ''
              }`}
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                if (state.isFinished) {
                  handleReset()
                  return
                }
                if (state.isTyping) {
                  dispatch({ type: 'PAUSE_TYPING' })
                } else {
                  dispatch({ type: 'START_TYPING' })
                  inputRef.current?.focus()
                }
              }}
            >
              {state.isFinished ? 'Restart' : state.isTyping ? 'Pause' : 'Start'}
            </button>
          </Tooltip>
        </Header>

        <div className="container relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-5 px-4 pb-2 pt-2">
          <div className="flex w-full flex-1 flex-col items-center justify-center">
            {state.parsedArticle ? (
              <CodeEditorView state={state} />
            ) : (
              <div className="my-card flex h-64 w-full flex-col items-center justify-center rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800 text-gray-400 gap-3">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-400 border-r-transparent"></div>
                <p className="text-sm">正在加载并解析代码文章资源...</p>
              </div>
            )}
          </div>

          {!state.isFinished && <ArticleSpeed state={state} />}
        </div>
      </div>
    </Layout>
  )
}

export default ArticleTypingPage
