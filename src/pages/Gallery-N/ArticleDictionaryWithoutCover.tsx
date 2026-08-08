import bookCover from '@/assets/book-cover.png'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { currentArticleAtom, galleryMainModeAtom } from '@/store'
import type { ArticleResource } from '@/typings'
import { useSetAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'

interface ArticleDictionaryWithoutCoverProps {
  article: ArticleResource
  isSelected: boolean
  onSelectArticle?: (article: ArticleResource) => void
}

/**
 * 文章词典卡片：结构 / 尺寸 / 样式 1:1 对齐单词 DictionaryWithoutCover
 * - 固定 h-36 w-80
 * - 标题 text-xl、描述 truncate、底部 bold 元信息
 * - 右上角 bookCover 水印
 */
export default function ArticleDictionaryWithoutCover({
  article,
  isSelected,
  onSelectArticle,
}: ArticleDictionaryWithoutCoverProps) {
  const navigate = useNavigate()
  const setCurrentArticle = useSetAtom(currentArticleAtom)
  const setGalleryMainMode = useSetAtom(galleryMainModeAtom)

  const handleClick = () => {
    setCurrentArticle(article)
    setGalleryMainMode('article')
    if (onSelectArticle) {
      onSelectArticle(article)
    }
    navigate('/article-typing')
  }

  return (
    <div
      onClick={handleClick}
      className={`group flex h-36 w-80 cursor-pointer items-center justify-center overflow-hidden rounded-lg p-4 text-left shadow-lg focus:outline-none ${
        isSelected ? 'bg-indigo-400' : 'bg-zinc-50 hover:bg-white dark:bg-gray-800 dark:hover:bg-gray-700'
      }`}
      role="button"
    >
      <div className="relative ml-1 mt-2 flex h-full w-full flex-col items-start justify-start">
        <h1
          className={`mb-1.5 max-w-full truncate text-xl font-normal ${
            isSelected ? 'text-white' : 'text-gray-800 group-hover:text-indigo-400 dark:text-gray-200'
          }`}
        >
          {article.name}
        </h1>

        <TooltipProvider>
          <Tooltip delayDuration={400}>
            <TooltipTrigger asChild>
              <p
                className={`mb-1 max-w-full truncate whitespace-nowrap ${
                  isSelected ? 'text-white' : 'text-gray-600 dark:text-gray-200'
                }`}
              >
                {article.description}
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p>{article.description}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* 与单词「N 词」同位：行数 / 字符 + Level */}
        <p className={`mb-0.5 font-bold ${isSelected ? 'text-white' : 'text-gray-600 dark:text-gray-200'}`}>
          {article.lineCount} 行 · {article.length} 字
          {article.level ? ` · L${article.level}` : ''}
        </p>

        <div className="flex w-full items-center pt-2">
          {/* 占位，保持与单词卡片进度条区域相同高度节奏 */}
          <div className="mr-4 h-2 w-full" />
          <img
            src={bookCover}
            alt=""
            className={`absolute right-3 top-3 w-16 ${isSelected ? 'opacity-50' : 'opacity-20'}`}
          />
        </div>
      </div>
    </div>
  )
}
