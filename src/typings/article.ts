export type ArticleCategory = '代码片段' | '英文文章' | '技术文档' | '自定义'

/** 学习轨道：对齐 Obsidian 知识工程 / SAFTI 金融科技学院 课程树 */
export type ArticleTrack =
  | 'cs-programming' // 程序设计 / 计算科学语法
  | 'fintech-code' // 金融科技编程场景
  | 'finance-concept' // SAFTI 金融认知与跨课概念（多为英文打字）
  | 'knowledge-eng' // Markdown / Obsidian / Mermaid 知识工程
  | 'english-literacy' // 通用技术英文素养

export type ArticleResource = {
  id: string
  name: string
  description: string
  category: ArticleCategory
  tags: string[]
  language: 'javascript' | 'typescript' | 'python' | 'cpp' | 'java' | 'go' | 'english'
  codeLanguage?: string
  content: string // 直接包含文本内容，避免 fetch 404 导致白屏
  length: number // 总字符数
  lineCount: number // 总行数
  level?: 1 | 2 | 3 | 4 // 难度等级 (Level 1~4)
  /** 学习轨道（Gallery 可用 tags 筛选，亦便于课程映射） */
  track?: ArticleTrack
  /** 课程模块编码，如 SAFTI-01-编程 / KE-A-Markdown */
  module?: string
  author?: string
}

export type LineType = 'explanation' | 'comment' | 'code'

export type ArticleLineToken = {
  lineIndex: number
  type: LineType
  text: string
  isTypable: boolean      // 是否参与打字比对
}

export type ParsedArticleContent = {
  id: string
  title: string
  language: string
  codeLanguage?: string
  rawContent: string
  tokens: ArticleLineToken[]
}
