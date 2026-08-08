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

/** 文章 Gallery 用：只保留用户可读的主题标签，排除 track/module 技术字段 */
const ARTICLE_GALLERY_TAG_DENY =
  /^(cs-programming|fintech-code|finance-concept|knowledge-eng|english-literacy|SAFTI-.*|KE-.*|KnowledgeEng)$/

const ARTICLE_GALLERY_TAG_ALLOW =
  /^(Level [1-4]|JavaScript|TypeScript|Python|English|FinTech|Markdown|Obsidian|Mermaid|SQL|算法|数据结构|计算科学|控制流|数组|异步|复利|风险|支付|监管|SAFTI)$/

export function getArticleGalleryTags(article: ArticleResource): string[] {
  const fromTags = (article.tags || []).filter(
    (t) => !ARTICLE_GALLERY_TAG_DENY.test(t) && (ARTICLE_GALLERY_TAG_ALLOW.test(t) || /^Level /.test(t)),
  )
  // 保底：至少有 Level
  if (fromTags.length === 0) {
    return [`Level ${article.level || 1}`]
  }
  // Level 优先排前，其余按出现顺序去重
  const level = fromTags.filter((t) => t.startsWith('Level '))
  const rest = fromTags.filter((t) => !t.startsWith('Level '))
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
