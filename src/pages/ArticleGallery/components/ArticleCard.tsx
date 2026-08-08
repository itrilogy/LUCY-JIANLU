import React from 'react'
import type { ArticleResource } from '@/typings'

interface ArticleCardProps {
  article: ArticleResource
  isSelected: boolean
  onSelect: (article: ArticleResource) => void
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(article)}
      className={`my-card relative flex flex-col justify-between p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
        isSelected
          ? 'border-indigo-500 bg-indigo-50/60 dark:bg-indigo-950/40 shadow-lg ring-2 ring-indigo-500/20'
          : 'border-gray-200 dark:border-gray-700/80 hover:border-indigo-400 dark:hover:border-indigo-500 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md'
      }`}
    >
      <div>
        {/* 卡片头部：标题与 Level 徽章 */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-bold text-base text-gray-800 dark:text-gray-100 leading-snug">
            {article.name}
          </h3>
          <span className="flex-shrink-0 text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300 font-semibold border border-indigo-200 dark:border-indigo-800">
            Level {article.level || 1}
          </span>
        </div>

        {/* 描述说明 */}
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
          {article.description}
        </p>
      </div>

      {/* 底部元数据 */}
      <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 pt-3 border-t border-gray-100 dark:border-gray-700/60">
        <div className="flex items-center gap-2 font-mono">
          <span>{article.lineCount} 行</span>
          <span>•</span>
          <span>{article.length} 字符</span>
        </div>

        <div className="flex items-center gap-1.5">
          {article.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-[11px] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
