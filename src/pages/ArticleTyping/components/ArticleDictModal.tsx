import React, { useState } from 'react'
import { ARTICLE_RESOURCES } from '@/resources/articleDictionary'
import type { ArticleResource } from '@/typings'

interface ArticleDictModalProps {
  isOpen: boolean
  currentId: string
  onClose: () => void
  onSelect: (resource: ArticleResource) => void
}

export const ArticleDictModal: React.FC<ArticleDictModalProps> = ({
  isOpen,
  currentId,
  onClose,
  onSelect,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all')

  if (!isOpen) return null

  const filteredResources = ARTICLE_RESOURCES.filter((res) => {
    if (filterCategory === 'all') return true
    return res.category === filterCategory
  })

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl rounded-2xl bg-white p-6 shadow-2xl transition-colors duration-300 dark:bg-gray-800 dark:text-gray-100 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()} // 阻止冒泡，避免触发底层 textarea 聚焦
      >
        {/* 弹窗 Header */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span>📚</span> 选择代码 / 文章字典
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              选择适合您当前水平的代码片段或英文文章进行整篇练习
            </p>
          </div>

          {/* 分类 Filter */}
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl dark:bg-gray-700 text-xs">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition ${
                filterCategory === 'all'
                  ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-300'
              }`}
            >
              全部 ({ARTICLE_RESOURCES.length})
            </button>
            <button
              onClick={() => setFilterCategory('代码片段')}
              className={`px-3 py-1.5 rounded-lg font-medium transition ${
                filterCategory === '代码片段'
                  ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-300'
              }`}
            >
              代码片段
            </button>
            <button
              onClick={() => setFilterCategory('英文文章')}
              className={`px-3 py-1.5 rounded-lg font-medium transition ${
                filterCategory === '英文文章'
                  ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-300'
              }`}
            >
              英文文章
            </button>
          </div>
        </div>

        {/* 字典卡片网格列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto p-1 my-4 flex-1">
          {filteredResources.map((res) => {
            const isSelected = res.id === currentId
            return (
              <div
                key={res.id}
                onClick={() => {
                  onSelect(res)
                  onClose()
                }}
                className={`relative flex flex-col justify-between p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 ring-2 ring-indigo-500/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 bg-gray-50/50 dark:bg-gray-900/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-bold text-sm text-gray-800 dark:text-gray-100 flex items-center gap-1.5">
                      {res.name}
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300 font-semibold">
                      Level {res.level || 1}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mb-3">
                    {res.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-gray-400 dark:text-gray-500 pt-2 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex gap-2">
                    <span>{res.lineCount} 行</span>
                    <span>•</span>
                    <span>{res.length} 字符</span>
                  </div>
                  <div className="flex gap-1">
                    {res.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-1.5 py-0.5 bg-gray-200/60 dark:bg-gray-800 rounded text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* 底部按钮 */}
        <div className="flex justify-end pt-3 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 transition"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  )
}
