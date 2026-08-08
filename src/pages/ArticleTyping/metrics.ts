import { isCharMatch } from './charMatch'
import type { CharMatchOptions } from './charMatch'

/**
 * 统计 buffer 与 target 前缀对齐的正确字符数
 */
export function countCorrectChars(
  target: string,
  buffer: string,
  matchOptions?: CharMatchOptions,
): number {
  let correct = 0
  const len = Math.min(target.length, buffer.length)
  for (let i = 0; i < len; i++) {
    if (isCharMatch(target[i], buffer[i], matchOptions)) {
      correct++
    }
  }
  return correct
}

export function computeAccuracy(correctChars: number, bufferLength: number): number {
  if (bufferLength <= 0) return 100
  return Number(((correctChars / bufferLength) * 100).toFixed(1))
}

export function computeWpmKpm(correctChars: number, elapsedSeconds: number): { kpm: number; wpm: number } {
  const t = Math.max(elapsedSeconds, 1)
  return {
    kpm: Math.round((correctChars / t) * 60),
    wpm: Math.round((correctChars / 5 / t) * 60),
  }
}

export function computeBackspaceRate(backspaceCount: number, totalKeystrokes: number): number {
  if (totalKeystrokes <= 0) return 0
  return Number(((backspaceCount / totalKeystrokes) * 100).toFixed(1))
}

export function isArticleComplete(
  target: string,
  buffer: string,
  matchOptions?: CharMatchOptions,
): boolean {
  if (!target || buffer.length < target.length) return false
  for (let i = 0; i < target.length; i++) {
    if (!isCharMatch(target[i], buffer[i], matchOptions)) {
      return false
    }
  }
  return true
}

export type ArticleMetricsSnapshot = {
  correctChars: number
  accuracy: number
  kpm: number
  wpm: number
  backspaceRate: number
  time: number
}

export function computeArticleMetrics(input: {
  target: string
  buffer: string
  startTime: number | null
  backspaceCount: number
  totalKeystrokes: number
  now?: number
  ignoreCase?: boolean
}): ArticleMetricsSnapshot {
  const now = input.now ?? Date.now()
  const elapsedSeconds = input.startTime ? Math.max(1, (now - input.startTime) / 1000) : 1
  const matchOptions = { ignoreCase: input.ignoreCase }
  const correctChars = countCorrectChars(input.target, input.buffer, matchOptions)
  const { kpm, wpm } = computeWpmKpm(correctChars, elapsedSeconds)

  return {
    correctChars,
    accuracy: computeAccuracy(correctChars, input.buffer.length),
    kpm,
    wpm,
    backspaceRate: computeBackspaceRate(input.backspaceCount, input.totalKeystrokes),
    time: input.startTime ? Math.floor(elapsedSeconds) : 0,
  }
}
