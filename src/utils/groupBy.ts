import type { ArticleResource, Dictionary } from '@/typings'

export default function groupBy<T>(elements: T[], iteratee: (value: T) => string) {
  return elements.reduce<Record<string, T[]>>((result, value) => {
    const key = iteratee(value)
    if (Object.prototype.hasOwnProperty.call(result, key)) {
      result[key].push(value)
    } else {
      result[key] = [value]
    }
    return result
  }, {})
}

/** 单词词典：按 dict.tags 全量分组（上游词库本身 tag 已精简） */
export function groupByDictTags(dicts: Dictionary[]) {
  return dicts.reduce<Record<string, Dictionary[]>>((result, dict) => {
    dict.tags.forEach((tag) => {
      if (Object.prototype.hasOwnProperty.call(result, tag)) {
        result[tag].push(dict)
      } else {
        result[tag] = [dict]
      }
    })
    return result
  }, {})
}

/**
 * 文章 Gallery 标签：对齐单词词典的「少量、稳定」标签条。
 * 只保留白名单主题，避免课程细标签（苏格拉底/康德…）把标签栏撑爆、布局崩坏。
 */
const ARTICLE_GALLERY_TAG_ALLOW = new Set([
  'Level 1',
  'Level 2',
  'Level 3',
  'Level 4',
  'JavaScript',
  'TypeScript',
  'Python',
  'English',
  'FinTech',
  'Markdown',
  'Obsidian',
  'Mermaid',
  'SQL',
  '算法',
  '数据结构',
  '计算科学',
  '控制流',
  '数组',
  '异步',
  '复利',
  '风险',
  '支付',
  '监管',
  'SAFTI',
  // 课程系列（系列级，非单篇主题）
  'Philosophy',
  '苏菲的世界',
  '大一精读',
])

export function getArticleGalleryTags(article: ArticleResource): string[] {
  const fromTags = (article.tags || []).filter((t) => ARTICLE_GALLERY_TAG_ALLOW.has(t) || /^Level [1-4]$/.test(t))

  const levelTag = article.level ? `Level ${article.level}` : undefined
  const withLevel =
    levelTag && !fromTags.some((t) => t.startsWith('Level '))
      ? [levelTag, ...fromTags]
      : fromTags

  if (withLevel.length === 0) {
    return [levelTag || 'Level 1']
  }

  const level = withLevel.filter((t) => t.startsWith('Level '))
  const rest = withLevel.filter((t) => !t.startsWith('Level '))
  return [...new Set([...level, ...rest])]
}

export function groupByArticleGalleryTags(articles: ArticleResource[]) {
  return articles.reduce<Record<string, ArticleResource[]>>((result, art) => {
    getArticleGalleryTags(art).forEach((tag) => {
      if (Object.prototype.hasOwnProperty.call(result, tag)) {
        result[tag].push(art)
      } else {
        result[tag] = [art]
      }
    })
    return result
  }, {})
}
