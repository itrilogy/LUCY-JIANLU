import type { ParsedArticleContent } from '@/typings'
import type { ArticleTypingConfig } from '../config'

export type ArticleTypingState = {
  parsedArticle: ParsedArticleContent | null
  targetText: string
  userInputBuffer: string

  /** 当前会话使用的练习配置快照（LOAD 时写入） */
  runtimeConfig: ArticleTypingConfig

  totalKeystrokes: number
  errorKeystrokes: number
  backspaceCount: number
  startTime: number | null
  endTime: number | null

  timerData: {
    time: number
    wpm: number
    kpm: number
    accuracy: number
    backspaceRate: number
  }

  isTyping: boolean
  isFinished: boolean
}

export type ArticleTypingAction =
  | {
      type: 'LOAD_ARTICLE'
      payload: { article: ParsedArticleContent; config: ArticleTypingConfig }
    }
  | { type: 'START_TYPING' }
  | { type: 'PAUSE_TYPING' }
  | { type: 'APPEND_INPUT'; payload: string }
  | { type: 'HANDLE_BACKSPACE' }
  | { type: 'DELETE_WORD' }
  | { type: 'RESET' }
  | { type: 'TICK_TIMER' }
  | { type: 'FINISH_TYPING' }
  | { type: 'SYNC_CONFIG'; payload: ArticleTypingConfig }
