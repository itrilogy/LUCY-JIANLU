import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useHotkeys } from 'react-hotkeys-hook'
import Layout from '@/components/Layout'
import { ARTICLE_RESOURCES } from '@/resources/articleDictionary'
import { currentArticleAtom } from '@/store'
import type { ArticleResource } from '@/typings'
import { useSetAtom } from 'jotai'
import { ArticleCard } from './components/ArticleCard'
import type { ArticleCategoryTab } from './components/ArticleTabSwitcher'
import { ArticleTabSwitcher } from './components/ArticleTabSwitcher'

interface ArticleGalleryProps {
  currentArticleId?: string
  onSelectArticle?: (article: ArticleResource) => void
  isModalMode?: boolean
  onCloseModal?: () => void
}

export const ArticleGallery: React.FC<ArticleGalleryProps> = ({
  currentArticleId,
  onSelectArticle,
  isModalMode = false,
  onCloseModal,
}) => {
  const navigate = useNavigate()
  const setCurrentArticle = useSetAtom(currentArticleAtom)
  const [currentTab, setCurrentTab] = useState<ArticleCategoryTab>('all')
  const [selectedTag, setSelectedTag] = useState<string>('all')

  const handleBack = () => {
    if (isModalMode && onCloseModal) {
      onCloseModal()
    } else {
      navigate('/article-typing')
    }
  }

  const handleSelectArticle = (art: ArticleResource) => {
    setCurrentArticle(art)
    if (onSelectArticle) {
      onSelectArticle(art)
    }
    handleBack()
  }

  useHotkeys('esc', handleBack)

  // 按 Category 与 Tag 分组过滤
  const filteredArticles = useMemo(() => {
    return ARTICLE_RESOURCES.filter((art) => {
      if (currentTab !== 'all' && art.category !== currentTab) return false
      if (selectedTag !== 'all' && !art.tags.includes(selectedTag)) return false
      return true
    })
  }, [currentTab, selectedTag])

  // 提取所有可用 Tags
  const allTags = useMemo(() => {
    const set = new Set<string>()
    ARTICLE_RESOURCES.forEach((art) => art.tags.forEach((t) => set.add(t)))
    return ['all', ...Array.from(set)]
  }, [])

  const content = (
    <div className="relative flex w-full flex-1 flex-col overflow-y-auto px-6 md:px-16 py-8">
      {/* 关闭按钮（与 Gallery-N 对齐） */}
      <button
        onClick={handleBack}
        className="absolute right-8 top-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
        title="关闭 (Esc)"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* 头部标题与描述 */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-700/80 pb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
            <span>📚</span> 文章与代码字典画廊
          </h1>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
            参照离散单词字典设计，挑选符合您当前练习阶梯的代码片段与英文段落
          </p>
        </div>

        {/* 顶部分类切换器 (Tab Switcher) */}
        <ArticleTabSwitcher currentTab={currentTab} onTabChange={setCurrentTab} />
      </div>

      {/* 标签微调 Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 custom-scrollbar">
        <span className="text-xs text-gray-400 flex-shrink-0 font-medium">标签筛选:</span>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              selectedTag === tag
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {tag === 'all' ? '全部标签' : tag}
          </button>
        ))}
      </div>

      {/* 文章字典卡片网格列表 (与 Gallery-N 的 DictionaryGroup 100% 对齐) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 overflow-y-auto pr-1">
        {filteredArticles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            isSelected={article.id === currentArticleId}
            onSelect={handleSelectArticle}
          />
        ))}
      </div>

      {/* 版权与数据说明（与 Gallery-N 底栏 100% 对齐） */}
      <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
        <p>
          本模块的代码片段与文章数据均来源于开源社区及贡献者。练习数据仅供个人个人键盘敲击提升与代码规范学习。
        </p>
      </footer>
    </div>
  )

  if (isModalMode) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
        <div
          className="w-full max-w-5xl rounded-3xl bg-white dark:bg-gray-900 shadow-2xl transition-colors duration-300 max-h-[90vh] flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {content}
        </div>
      </div>
    )
  }

  return <Layout>{content}</Layout>
}

export default ArticleGallery
