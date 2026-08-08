import { isCharMatch } from '../charMatch'
import { defaultArticleTypingConfig } from '../config'
import { computeArticleMetrics, isArticleComplete } from '../metrics'
import { buildTargetTextFromTokens } from '@/utils/articleParser'
import type { ArticleTypingAction, ArticleTypingState } from './type'

export { isCharMatch, normalizeChar } from '../charMatch'

export const initialArticleTypingState: ArticleTypingState = {
  parsedArticle: null,
  targetText: '',
  userInputBuffer: '',
  runtimeConfig: defaultArticleTypingConfig,
  totalKeystrokes: 0,
  errorKeystrokes: 0,
  backspaceCount: 0,
  startTime: null,
  endTime: null,
  timerData: {
    time: 0,
    wpm: 0,
    kpm: 0,
    accuracy: 100,
    backspaceRate: 0,
  },
  isTyping: false,
  isFinished: false,
}

function matchOpts(state: ArticleTypingState) {
  return { ignoreCase: state.runtimeConfig.ignoreCase }
}

function withMetrics(
  state: ArticleTypingState,
  patch: Partial<ArticleTypingState> = {},
): ArticleTypingState {
  const next: ArticleTypingState = { ...state, ...patch }
  const metrics = computeArticleMetrics({
    target: next.targetText,
    buffer: next.userInputBuffer,
    startTime: next.startTime,
    backspaceCount: next.backspaceCount,
    totalKeystrokes: next.totalKeystrokes,
    now: next.endTime ?? undefined,
    ignoreCase: next.runtimeConfig.ignoreCase,
  })

  return {
    ...next,
    timerData: {
      time: metrics.time,
      wpm: metrics.wpm,
      kpm: metrics.kpm,
      accuracy: metrics.accuracy,
      backspaceRate: metrics.backspaceRate,
    },
  }
}

export function articleTypingReducer(
  state: ArticleTypingState,
  action: ArticleTypingAction,
): ArticleTypingState {
  switch (action.type) {
    case 'LOAD_ARTICLE': {
      const { article, config } = action.payload
      const targetText = buildTargetTextFromTokens(article.tokens)

      return {
        ...initialArticleTypingState,
        parsedArticle: article,
        targetText,
        runtimeConfig: config,
      }
    }

    case 'SYNC_CONFIG': {
      // 不改变 skipComments 时的 target（skip 变更会由页面重新 LOAD）
      return {
        ...state,
        runtimeConfig: action.payload,
      }
    }

    case 'START_TYPING': {
      if (state.isFinished) return state
      return {
        ...state,
        isTyping: true,
        startTime: state.startTime ?? Date.now(),
      }
    }

    case 'PAUSE_TYPING': {
      if (!state.isTyping || state.isFinished) return state
      return {
        ...state,
        isTyping: false,
      }
    }

    case 'APPEND_INPUT': {
      if (state.isFinished || !state.targetText) return state

      const remaining = state.targetText.length - state.userInputBuffer.length
      if (remaining <= 0) return state

      const payload = action.payload.slice(0, remaining)
      if (!payload) return state

      const now = Date.now()
      const startTime = state.startTime ?? now
      let errorKeystrokes = state.errorKeystrokes
      const baseLen = state.userInputBuffer.length
      const opts = matchOpts(state)

      for (let i = 0; i < payload.length; i++) {
        const targetChar = state.targetText[baseLen + i]
        if (targetChar !== undefined && !isCharMatch(targetChar, payload[i], opts)) {
          errorKeystrokes++
        }
      }

      const newBuffer = state.userInputBuffer + payload
      const totalKeystrokes = state.totalKeystrokes + payload.length
      const finished = isArticleComplete(state.targetText, newBuffer, opts)

      return withMetrics(state, {
        userInputBuffer: newBuffer,
        totalKeystrokes,
        errorKeystrokes,
        startTime,
        endTime: finished ? now : null,
        isTyping: !finished,
        isFinished: finished,
      })
    }

    case 'HANDLE_BACKSPACE': {
      if (state.isFinished || state.userInputBuffer.length === 0) return state

      return withMetrics(state, {
        userInputBuffer: state.userInputBuffer.slice(0, -1),
        totalKeystrokes: state.totalKeystrokes + 1,
        backspaceCount: state.backspaceCount + 1,
        isTyping: true,
        startTime: state.startTime ?? Date.now(),
      })
    }

    case 'DELETE_WORD': {
      if (state.isFinished || state.userInputBuffer.length === 0) return state

      const buf = state.userInputBuffer
      let i = buf.length
      while (i > 0 && /\s/.test(buf[i - 1])) i--
      while (i > 0 && !/\s/.test(buf[i - 1])) i--
      const deleted = buf.length - i
      if (deleted === 0) return state

      return withMetrics(state, {
        userInputBuffer: buf.slice(0, i),
        totalKeystrokes: state.totalKeystrokes + 1,
        backspaceCount: state.backspaceCount + 1,
        isTyping: true,
        startTime: state.startTime ?? Date.now(),
      })
    }

    case 'TICK_TIMER': {
      if (!state.isTyping || !state.startTime) return state
      return withMetrics(state)
    }

    case 'RESET': {
      return {
        ...initialArticleTypingState,
        parsedArticle: state.parsedArticle,
        targetText: state.targetText,
        runtimeConfig: state.runtimeConfig,
      }
    }

    case 'FINISH_TYPING': {
      return withMetrics(state, {
        isTyping: false,
        isFinished: true,
        endTime: Date.now(),
      })
    }

    default:
      return state
  }
}
