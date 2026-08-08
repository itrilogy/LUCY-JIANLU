import ArticleCategoryDicts from './ArticleCategoryDicts'
import { ArticleLanguageTabSwitcher } from './ArticleLanguageTabSwitcher'
import DictionaryGroup from './CategoryDicts'
import DictRequest from './DictRequest'
import { LanguageTabSwitcher } from './LanguageTabSwitcher'
import Layout from '@/components/Layout'
import { ARTICLE_RESOURCES } from '@/resources/articleDictionary'
import { dictionaries } from '@/resources/dictionary'
import { currentArticleAtom, currentDictInfoAtom, galleryMainModeAtom } from '@/store'
import type { GalleryMainMode } from '@/store'
import type { ArticleResource, Dictionary, LanguageCategoryType } from '@/typings'
import groupBy, { groupByArticleGalleryTags, groupByDictTags } from '@/utils/groupBy'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { useAtom, useAtomValue } from 'jotai'
import { createContext, useCallback, useEffect, useMemo, useRef } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import type { Updater } from 'use-immer'
import { useImmer } from 'use-immer'
import IconInfo from '~icons/ic/outline-info'
import IconX from '~icons/tabler/x'

/** 打开 Gallery 时的来源练习模式：关闭时回到对应练习页，与浏览中切换的 Tab 解耦 */
export type GalleryLocationState = {
  from?: GalleryMainMode
}

export type GalleryModeType = GalleryMainMode

export type GalleryState = {
  currentLanguageTab: LanguageCategoryType
  currentArticleLanguageTab: string
}

const initialGalleryState: GalleryState = {
  currentLanguageTab: 'en',
  currentArticleLanguageTab: 'all',
}

export const GalleryContext = createContext<{
  state: GalleryState
  setState: Updater<GalleryState>
} | null>(null)

export default function GalleryPage() {
  const [mainMode, setMainMode] = useAtom(galleryMainModeAtom)
  const [galleryState, setGalleryState] = useImmer<GalleryState>(initialGalleryState)
  const currentArticle = useAtomValue(currentArticleAtom)
  const selectedArticleId = currentArticle?.id || ARTICLE_RESOURCES[0].id

  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const currentDictInfo = useAtomValue(currentDictInfoAtom)

  const entryFromRef = useRef<GalleryMainMode | null>(null)
  if (entryFromRef.current === null) {
    const stateFrom = (location.state as GalleryLocationState | null)?.from
    const queryMode = searchParams.get('mode')
    if (stateFrom === 'word' || stateFrom === 'article') {
      entryFromRef.current = stateFrom
    } else if (queryMode === 'word' || queryMode === 'article') {
      entryFromRef.current = queryMode
    } else {
      entryFromRef.current = mainMode
    }
  }

  useEffect(() => {
    const mode = searchParams.get('mode')
    if (mode === 'article' || mode === 'word') {
      if (mode !== mainMode) setMainMode(mode)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  const switchMainMode = useCallback(
    (mode: GalleryMainMode) => {
      setMainMode(mode)
      setSearchParams(
        mode === 'article' ? { mode: 'article' } : { mode: 'word' },
        { replace: true, state: location.state },
      )
    },
    [setMainMode, setSearchParams, location.state],
  )

  const { groupedByCategoryAndTag } = useMemo(() => {
    const currentLanguageCategoryDicts = dictionaries.filter(
      (dict) => dict.languageCategory === galleryState.currentLanguageTab,
    )
    const groupedByCategory = Object.entries(groupBy(currentLanguageCategoryDicts, (dict) => dict.category))
    const groupedByCategoryAndTag = groupedByCategory.map(
      ([category, dicts]) => [category, groupByDictTags(dicts)] as [string, Record<string, Dictionary[]>],
    )
    return { groupedByCategoryAndTag }
  }, [galleryState.currentLanguageTab])

  const { articleGroupedByCategoryAndTag } = useMemo(() => {
    const tab = galleryState.currentArticleLanguageTab
    const filteredArticles = ARTICLE_RESOURCES.filter((art) => {
      if (tab === 'all') return true
      if (tab === 'knowledge-eng' || tab === 'finance-concept' || tab === 'fintech-code' || tab === 'cs-programming') {
        return art.track === tab || art.tags.includes(tab)
      }
      if (tab === 'code') {
        return art.category === '代码片段' || (art.language !== 'english' && art.category === '技术文档')
      }
      if (tab === 'javascript') return art.language === 'javascript' || art.language === 'typescript'
      if (tab === 'english') return art.language === 'english' || art.category === '英文文章'
      return art.language === tab || art.category === tab
    })

    const groupedByCategory = Object.entries(groupBy(filteredArticles, (art) => art.category))
    // 使用精简标签分组，避免 track/module 技术 tag 污染标签条
    const articleGroupedByCategoryAndTag = groupedByCategory.map(
      ([category, arts]) => [category, groupByArticleGalleryTags(arts)] as [string, Record<string, ArticleResource[]>],
    )
    return { articleGroupedByCategoryAndTag }
  }, [galleryState.currentArticleLanguageTab])

  const onBack = useCallback(() => {
    const returnMode = entryFromRef.current ?? 'word'
    if (returnMode === 'article') {
      navigate('/article-typing')
    } else {
      navigate('/')
    }
  }, [navigate])

  useHotkeys('enter,esc', onBack, { preventDefault: true })

  useEffect(() => {
    if (currentDictInfo) {
      setGalleryState((state) => {
        state.currentLanguageTab = currentDictInfo.languageCategory
      })
    }
  }, [currentDictInfo, setGalleryState])

  const handleSelectArticle = (_article: ArticleResource) => {
    // 选定由 ArticleDictionaryWithoutCover 完成
  }

  return (
    <Layout>
      <GalleryContext.Provider value={{ state: galleryState, setState: setGalleryState }}>
        {/* 以下容器结构对齐 origin Gallery-N 单词词典 */}
        <div className="relative mb-auto mt-auto flex w-full flex-1 flex-col overflow-y-auto pl-20">
          <IconX
            className="absolute right-20 top-10 mr-2 h-7 w-7 cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            onClick={onBack}
          />

          <div className="mt-20 flex w-full flex-1 flex-col items-center justify-center overflow-y-auto">
            <div className="flex h-full flex-col overflow-y-auto">
              {/* 单词 / 文章 模式切换（文章能力新增，置于语言 Tab 之上） */}
              <div className="mb-2 flex items-center space-x-8 border-b border-gray-200 pb-3 pr-20 dark:border-gray-700/80">
                <button
                  type="button"
                  onClick={() => switchMainMode('word')}
                  className={`border-b-4 pb-1.5 text-2xl font-bold transition-all duration-300 ${
                    mainMode === 'word'
                      ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                      : 'border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                  }`}
                >
                  🔤 单词词典
                </button>
                <button
                  type="button"
                  onClick={() => switchMainMode('article')}
                  className={`border-b-4 pb-1.5 text-2xl font-bold transition-all duration-300 ${
                    mainMode === 'article'
                      ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                      : 'border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                  }`}
                >
                  📄 文章 / 代码词典
                </button>
              </div>

              {/* 与原版相同：h-20 顶栏 + 语言切换 + DictRequest */}
              <div className="flex h-20 w-full items-center justify-between pb-6 pr-20">
                {mainMode === 'word' ? <LanguageTabSwitcher /> : <ArticleLanguageTabSwitcher />}
                <DictRequest />
              </div>

              <ScrollArea.Root className="flex-1 overflow-y-auto">
                <ScrollArea.Viewport className="h-full w-full">
                  {/* items-start：卡片组左起排列，与单词词典一致 */}
                  <div className="mr-4 flex flex-1 flex-col items-start justify-start gap-14 overflow-y-auto">
                    {mainMode === 'word'
                      ? groupedByCategoryAndTag.map(([category, groupeByTag]) => (
                          <DictionaryGroup key={category} groupedDictsByTag={groupeByTag} />
                        ))
                      : articleGroupedByCategoryAndTag.map(([category, groupeByTag]) => (
                          <ArticleCategoryDicts
                            key={category}
                            groupedArticlesByTag={groupeByTag}
                            currentArticleId={selectedArticleId}
                            onSelectArticle={handleSelectArticle}
                          />
                        ))}
                  </div>

                  <div className="flex items-center justify-center pb-10 pt-[20rem] text-gray-500">
                    <IconInfo className="mr-1 h-5 w-5" />
                    <p className="mr-5 w-10/12 text-xs">
                      本项目的词典数据来自多个开源项目以及社区贡献者的无偿提供。我们深感感激并尊重每一位贡献者的知识产权。
                      这些数据仅供个人学习和研究使用，严禁用于任何商业目的。如果你是数据的版权所有者，并且认为我们的使用方式侵犯了你的权利，请通过网站底部的电子邮件与我们联系。一旦收到有效的版权投诉，我们将在最短的时间内删除相关内容或寻求必要的许可。
                      同时，我们也鼓励所有使用这些数据的人尊重版权所有者的权利，并且在使用这些数据时遵守所有相关的法律和规定。
                      请注意，虽然我们尽力确保所有数据的合法性和准确性，但我们不能对任何数据的准确性、完整性、合法性或可靠性做出任何保证。使用这些数据的风险完全由用户自己承担。
                    </p>
                  </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className="flex touch-none select-none bg-transparent" orientation="vertical" />
              </ScrollArea.Root>
            </div>
          </div>
        </div>
      </GalleryContext.Provider>
    </Layout>
  )
}
