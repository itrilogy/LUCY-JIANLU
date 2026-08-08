/**
 * 文章 / 代码练习专用配置（与单词 Setting 分轨）
 * 全局共享项（深色、键音、字号）仍走 store 中已有 atom
 */
export type ArticleTabWidth = 2 | 4

export type ArticleTypingConfig = {
  /** 跳过输入型英文注释行（//、#、/*），仅练习代码 */
  skipComments: boolean
  /** Tab 键展开为空格数 */
  tabWidth: ArticleTabWidth
  /** Enter 后自动补齐下一行目标前导缩进 */
  smartIndent: boolean
  /** 忽略大小写比对 */
  ignoreCase: boolean
  /** 显示 //: 只读说明卡片 */
  showExplanations: boolean
  /** 光标行自动滚动至视口中央 */
  autoScroll: boolean
}

export const defaultArticleTypingConfig: ArticleTypingConfig = {
  skipComments: false,
  tabWidth: 2,
  smartIndent: true,
  ignoreCase: false,
  showExplanations: true,
  autoScroll: true,
}
