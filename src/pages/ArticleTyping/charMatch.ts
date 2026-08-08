/**
 * 全角标点符号转换为对应半角符号
 */
export function normalizeChar(ch: string): string {
  if (!ch) return ''
  const map: Record<string, string> = {
    '，': ',',
    '。': '.',
    '；': ';',
    '：': ':',
    '！': '!',
    '？': '?',
    '“': '"',
    '”': '"',
    '‘': "'",
    '’': "'",
    '（': '(',
    '）': ')',
    '【': '[',
    '】': ']',
    '—': '-',
    '《': '<',
    '》': '>',
  }
  return map[ch] || ch
}

export type CharMatchOptions = {
  ignoreCase?: boolean
}

/**
 * 判断用户输入的字符与目标字符是否匹配（支持全半角归一化、可选忽略大小写）
 */
export function isCharMatch(targetChar: string, userChar?: string, options?: CharMatchOptions): boolean {
  if (!userChar) return false
  if (targetChar === userChar) return true

  const a = normalizeChar(targetChar)
  const b = normalizeChar(userChar)
  if (a === b) return true

  if (options?.ignoreCase) {
    return a.toLowerCase() === b.toLowerCase()
  }
  return false
}

/**
 * Enter 后智能缩进：若目标下一位置为换行，则连同其后的前导空白一并返回
 */
export function buildEnterPayload(target: string, buffer: string, smartIndent: boolean): string {
  const pos = buffer.length
  if (pos >= target.length) return ''

  if (target[pos] !== '\n') {
    // 行中按 Enter：仍插入换行（可能判错，由用户 Backspace 修正）
    return '\n'
  }

  if (!smartIndent) return '\n'

  let indent = ''
  let j = pos + 1
  while (j < target.length && (target[j] === ' ' || target[j] === '\t')) {
    indent += target[j]
    j++
  }
  return '\n' + indent
}

/** Tab 展开为空格 */
export function buildTabPayload(tabWidth: 2 | 4): string {
  return ' '.repeat(tabWidth)
}
