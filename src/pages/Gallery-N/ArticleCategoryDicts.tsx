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
 * 文章分类组：结构对齐单词 DictionaryGroup
 * DictTagSwitcher + 相同 grid 参数
 */
export default function ArticleCategoryDicts({
  groupedArticlesByTag,
  currentArticleId,
  onSelectArticle,
}: ArticleCategoryDictsProps) {
  const tagList = useMemo(() => {
    const keys = Object.keys(groupedArticlesByTag)
    // Level 优先排序，其余字典序 —— 接近单词词典标签条可读性
    return keys.sort((a, b) => {
      const la = a.match(/^Level (\d)$/)
      const lb = b.match(/^Level (\d)$/)
      if (la && lb) return Number(la[1]) - Number(lb[1])
      if (la) return -1
      if (lb) return 1
      return a.localeCompare(b, 'zh')
    })
  }, [groupedArticlesByTag])
  const [currentTag, setCurrentTag] = useState(tagList.length > 0 ? tagList[0] : '')

  useEffect(() => {
    if (tagList.length === 0) {
      setCurrentTag('')
      return
    }
    if (!tagList.includes(currentTag)) {
      setCurrentTag(tagList[0])
    }
  }, [tagList, currentTag])

  const onChangeCurrentTag = useCallback((tag: string) => {
    setCurrentTag(tag)
  }, [])

  return (
    <div>
      <DictTagSwitcher tagList={tagList} currentTag={currentTag} onChangeCurrentTag={onChangeCurrentTag} />
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
