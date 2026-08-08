import { articleTypingConfigAtom, fontSizeConfigAtom } from '@/store'
import { useAtomValue } from 'jotai'
import React, { useEffect, useMemo, useRef } from 'react'
import { isCharMatch } from '../store'
import type { ArticleTypingState } from '../store/type'

interface CodeEditorViewProps {
  state: ArticleTypingState
}

type RenderChar = {
  char: string
  userChar?: string
  state: 'correct' | 'wrong' | 'pending' | 'cursor'
}

/**
 * 练习区视觉对齐单词模式：轻 blur 遮罩 + 绿/红/灰配色 + 字号联动
 */
export const CodeEditorView: React.FC<CodeEditorViewProps> = ({ state }) => {
  const { parsedArticle, userInputBuffer, isTyping, isFinished, timerData, runtimeConfig } = state
  const activeLineRef = useRef<HTMLDivElement>(null)
  const fontSizeConfig = useAtomValue(fontSizeConfigAtom)
  const liveConfig = useAtomValue(articleTypingConfigAtom)

  // 显示类配置优先用 live；比对 ignoreCase 用 runtime（与 store 一致）
  const showExplanations = liveConfig.showExplanations
  const autoScroll = liveConfig.autoScroll
  const ignoreCase = runtimeConfig.ignoreCase

  const showReadyOverlay = !isTyping && !isFinished
  const overlayLabel = userInputBuffer.length === 0 && timerData.time === 0 ? '开始' : '继续'

  const codeFontPx = Math.min(28, Math.max(16, Math.round(fontSizeConfig.foreignFont * 0.42)))
  const lineMinHeightPx = Math.round(codeFontPx * 1.85)
  const gutterWidthPx = Math.max(40, Math.round(codeFontPx * 2.2))

  const renderedLines = useMemo(() => {
    if (!parsedArticle) return []

    let globalCharOffset = 0
    const matchOpts = { ignoreCase }

    return parsedArticle.tokens.map((token) => {
      // 只读说明卡片
      if (token.type === 'explanation') {
        return {
          ...token,
          chars: [] as RenderChar[],
          isExplanation: true,
          isSkipped: false,
          hasCursor: false,
        }
      }

      // 跳过敲击的注释：展示但不计入 target 偏移
      if (!token.isTypable) {
        const chars: RenderChar[] = token.text.split('').map((char) => ({
          char,
          state: 'pending' as const,
        }))
        return {
          ...token,
          chars,
          isExplanation: false,
          isSkipped: true,
          hasCursor: false,
        }
      }

      const lineText = token.text
      const lineStartOffset = globalCharOffset
      const lineEndOffset = globalCharOffset + lineText.length
      globalCharOffset += lineText.length + 1

      let hasCursor = false
      const chars: RenderChar[] = lineText.split('').map((char, charIdx) => {
        const absIdx = lineStartOffset + charIdx
        let charState: RenderChar['state'] = 'pending'
        let userChar: string | undefined

        if (absIdx < userInputBuffer.length) {
          userChar = userInputBuffer[absIdx]
          charState = isCharMatch(char, userChar, matchOpts) ? 'correct' : 'wrong'
        } else if (absIdx === userInputBuffer.length) {
          charState = 'cursor'
          hasCursor = true
        }

        return { char, userChar, state: charState }
      })

      if (userInputBuffer.length === lineEndOffset) {
        hasCursor = true
      }

      return {
        ...token,
        chars,
        isExplanation: false,
        isSkipped: false,
        hasCursor,
      }
    })
  }, [parsedArticle, userInputBuffer, ignoreCase])

  useEffect(() => {
    if (autoScroll && activeLineRef.current && isTyping) {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }, [userInputBuffer.length, isTyping, autoScroll])

  if (!parsedArticle) {
    return (
      <div className="flex h-64 items-center justify-center text-base text-gray-400">
        正在加载代码资源...
      </div>
    )
  }

  return (
    <div className="my-card relative flex min-h-[min(52vh,28rem)] max-h-[min(68vh,40rem)] w-full flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-colors duration-300 dark:bg-gray-800">
      <div
        className="custom-scrollbar flex-1 overflow-y-auto px-5 py-5 font-mono md:px-8 md:py-6"
        style={{ fontSize: `${codeFontPx}px`, lineHeight: `${lineMinHeightPx}px` }}
      >
        {renderedLines.map((line, idx) => {
          if (line.isExplanation) {
            if (!showExplanations) return null
            return (
              <div
                key={idx}
                className="my-2 flex items-start gap-2 rounded-lg border border-amber-200/80 bg-amber-50/90 py-2 px-3 font-sans text-[0.75em] leading-relaxed text-amber-800 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-300"
              >
                <span className="shrink-0 font-semibold text-amber-600 dark:text-amber-400">💡</span>
                <span>{line.text}</span>
              </div>
            )
          }

          return (
            <div
              key={idx}
              ref={line.hasCursor ? activeLineRef : null}
              className={`flex items-center rounded px-1 transition-colors ${
                line.isSkipped
                  ? 'opacity-45'
                  : line.hasCursor && !showReadyOverlay
                    ? 'bg-indigo-50/50 dark:bg-indigo-950/25'
                    : 'hover:bg-gray-50/80 dark:hover:bg-gray-700/20'
              }`}
              style={{ minHeight: `${lineMinHeightPx}px` }}
            >
              <span
                className="flex-shrink-0 select-none text-right font-sans text-[0.65em] leading-none text-gray-400 dark:text-gray-500"
                style={{ width: `${gutterWidthPx}px`, paddingRight: '0.75rem' }}
              >
                {idx + 1}
              </span>

              <div className="flex min-h-[1em] flex-1 flex-wrap items-center whitespace-pre">
                {line.chars.map((c, cIdx) => {
                  if (line.isSkipped || c.state === 'pending') {
                    const pendingClass =
                      line.type === 'comment' || line.isSkipped
                        ? 'text-gray-400 italic dark:text-gray-500'
                        : c.state === 'pending'
                          ? 'text-gray-600 dark:text-gray-50 dark:text-opacity-80'
                          : ''
                    if (c.state === 'correct') {
                      return (
                        <span key={cIdx} className="text-green-600 dark:text-green-400 dark:text-opacity-80">
                          {c.char === ' ' ? '\u00a0' : c.char}
                        </span>
                      )
                    }
                    if (c.state === 'wrong') {
                      return (
                        <span
                          key={cIdx}
                          className="rounded-sm bg-red-500/15 text-red-600 dark:text-red-400"
                          title={`期望: '${c.char}', 实际: '${c.userChar}'`}
                        >
                          {c.userChar === ' ' ? '␣' : c.userChar || c.char}
                        </span>
                      )
                    }
                    if (c.state === 'cursor' && !showReadyOverlay) {
                      return (
                        <span key={cIdx} className="rounded-sm bg-indigo-500 text-white dark:bg-indigo-400">
                          {c.char === ' ' ? '\u00a0' : c.char}
                        </span>
                      )
                    }
                    return (
                      <span key={cIdx} className={pendingClass}>
                        {c.char === ' ' ? '\u00a0' : c.char}
                      </span>
                    )
                  }

                  if (c.state === 'correct') {
                    return (
                      <span key={cIdx} className="text-green-600 dark:text-green-400 dark:text-opacity-80">
                        {c.char === ' ' ? '\u00a0' : c.char}
                      </span>
                    )
                  }

                  if (c.state === 'wrong') {
                    return (
                      <span
                        key={cIdx}
                        className="rounded-sm bg-red-500/15 text-red-600 dark:text-red-400"
                        title={`期望: '${c.char}', 实际: '${c.userChar}'`}
                      >
                        {c.userChar === ' ' ? '␣' : c.userChar || c.char}
                      </span>
                    )
                  }

                  if (c.state === 'cursor' && !showReadyOverlay) {
                    return (
                      <span key={cIdx} className="rounded-sm bg-indigo-500 text-white dark:bg-indigo-400">
                        {c.char === ' ' ? '\u00a0' : c.char}
                      </span>
                    )
                  }

                  return (
                    <span
                      key={cIdx}
                      className={
                        line.type === 'comment'
                          ? 'text-gray-400 italic dark:text-gray-500'
                          : 'text-gray-600 dark:text-gray-50 dark:text-opacity-80'
                      }
                    >
                      {c.char === ' ' ? '\u00a0' : c.char}
                    </span>
                  )
                })}

                {line.hasCursor &&
                  !showReadyOverlay &&
                  userInputBuffer.length > 0 &&
                  line.chars.every((c) => c.state !== 'cursor') && (
                    <span className="ml-px inline-block h-[1em] w-0.5 animate-pulse bg-indigo-500 align-middle" />
                  )}
              </div>
            </div>
          )
        })}
      </div>

      {showReadyOverlay && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl">
          <div className="flex h-full w-full items-center justify-center backdrop-blur-sm">
            <p className="w-full select-none text-center font-sans text-xl text-gray-600 dark:text-gray-50">
              按任意键{overlayLabel}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
