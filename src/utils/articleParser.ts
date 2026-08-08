import type { ArticleLineToken, ParsedArticleContent } from '@/typings'

export type ParseArticleOptions = {
  /** 为 true 时，输入型注释行 isTypable=false（跳过敲击） */
  skipComments?: boolean
}

/**
 * 解析源代码或文章文本，转化为前端可打字渲染的 Token 流
 *
 * 标记协议（详见 docs/article_resource_authoring_guide.md）：
 * 1. `//:` / `/*:` / `#:` → explanation，isTypable=false（只读说明）
 * 2. `//` / `/*` / `#` → comment，默认可敲；skipComments 时 isTypable=false
 * 3. 其余 → code，isTypable=true
 */
export function parseArticleSource(
  id: string,
  title: string,
  rawContent: string,
  codeLanguage: string = 'javascript',
  options: ParseArticleOptions = {},
): ParsedArticleContent {
  const { skipComments = false } = options
  const rawLines = rawContent.split(/\r?\n/)
  const tokens: ArticleLineToken[] = []

  rawLines.forEach((line, index) => {
    // 非输入型只读说明：`//:` / `/*:` / `#:`
    if (/^\s*((\/\/:)|(\/\*:)|(#:))/.test(line)) {
      const cleanText = line.replace(/^\s*((\/\/:)|(\/\*:)|(#:))\s*/, '')
      tokens.push({
        lineIndex: index,
        type: 'explanation',
        text: cleanText,
        isTypable: false,
      })
      return
    }

    // 输入型注释：`//` / `/*` / `#`（不含上面的 : 形式）
    if (/^\s*((\/\/)|(\/\*)|(#))/.test(line)) {
      tokens.push({
        lineIndex: index,
        type: 'comment',
        text: line,
        isTypable: !skipComments,
      })
      return
    }

    tokens.push({
      lineIndex: index,
      type: 'code',
      text: line,
      isTypable: true,
    })
  })

  return {
    id,
    title,
    language: 'code',
    codeLanguage,
    rawContent,
    tokens,
  }
}

/** 从 tokens 构建比对用 targetText（仅 isTypable 行，以 \n 连接） */
export function buildTargetTextFromTokens(tokens: ArticleLineToken[]): string {
  return tokens
    .filter((t) => t.isTypable)
    .map((t) => t.text)
    .join('\n')
}
