import React from 'react'

export type ArticleCategoryTab = 'all' | '代码片段' | '英文文章' | '技术文档'

interface ArticleTabSwitcherProps {
  currentTab: ArticleCategoryTab
  onTabChange: (tab: ArticleCategoryTab) => void
}

export const ArticleTabSwitcher: React.FC<ArticleTabSwitcherProps> = ({
  currentTab,
  onTabChange,
}) => {
  const tabs: { key: ArticleCategoryTab; label: string; icon: string }[] = [
    { key: 'all', label: '全部文章字典', icon: '🌐' },
    { key: '代码片段', label: '代码片段', icon: '👩‍💻' },
    { key: '英文文章', label: '英文文章', icon: '📖' },
    { key: '技术文档', label: '技术文档', icon: '📝' },
  ]

  return (
    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800/80 p-1.5 rounded-2xl border border-gray-200 dark:border-gray-700/60">
      {tabs.map((tab) => {
        const isActive = currentTab === tab.key
        return (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${
              isActive
                ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-md font-semibold'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}
