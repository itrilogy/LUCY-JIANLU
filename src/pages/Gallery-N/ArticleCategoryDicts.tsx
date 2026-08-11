import ArticleDictionaryWithoutCover from './ArticleDictionaryWithoutCover'
import DictTagSwitcher from './DictTagSwitcher'
import type { ArticleResource } from '@/typings'
import { useCallback, useEffect, useMemo, useState } from 'react'

interface ArticleCategoryDictsProps {
  groupedArticlesByTag: Record<string, ArticleResource[]>
  currentArticleId?: string
  onSelectArticle: (article: ArticleResource) => void
}

/**
 * 文章分类组：结构 1:1 对齐单词侧 CategoryDicts（DictionaryGroup）
 * DictTagSwitcher + 固定 w-80 卡片网格，不额外插入标题以免布局偏移
 */
export default function ArticleCategoryDicts({
  groupedArticlesByTag,
  currentArticleId,
  onSelectArticle,
}: ArticleCategoryDictsProps) {
  const tagList = useMemo(() => Object.keys(groupedArticlesByTag), [groupedArticlesByTag])
  const [currentTag, setCurrentTag] = useState(tagList.length > 0 ? tagList[0] : '')

  const onChangeCurrentTag = useCallback((tag: string) => {
    setCurrentTag(tag)
  }, [])

  useEffect(() => {
    if (tagList.length === 0) {
      setCurrentTag('')
      return
    }
    // 与单词侧类似：标签集合变化时，若当前 tag 失效则回退到第一个
    if (!tagList.includes(currentTag)) {
      setCurrentTag(tagList[0])
    }
  }, [tagList, currentTag])

  return (
    <div>
      <DictTagSwitcher tagList={tagList} currentTag={currentTag} onChangeCurrentTag={onChangeCurrentTag} />
      {/* 与线上单词词典一致：固定 w-80 卡片 + 响应列数，不铺满拉伸 */}
      <div className="mt-8 grid gap-x-5 gap-y-10 px-1 pb-4 sm:grid-cols-1 md:grid-cols-2 dic3:grid-cols-3 dic4:grid-cols-4">
        {currentTag && groupedArticlesByTag[currentTag] ? (
          groupedArticlesByTag[currentTag].map((article) => (
            <ArticleDictionaryWithoutCover
              key={article.id}
              article={article}
              isSelected={article.id === currentArticleId}
              onSelectArticle={onSelectArticle}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">当前分类下没有可用的文章字典</div>
        )}
      </div>
    </div>
  )
}
