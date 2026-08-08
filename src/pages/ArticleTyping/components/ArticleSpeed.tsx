import InfoBox from '@/pages/Typing/components/Speed/InfoBox'
import type { ArticleTypingState } from '../store/type'

interface ArticleSpeedProps {
  state: ArticleTypingState
}

/**
 * 文章练习底部指标条，布局对齐单词模式 Speed 卡片
 * 指标语义按长文/代码练习调整（KPM、退格率、进度）
 */
export default function ArticleSpeed({ state }: ArticleSpeedProps) {
  const seconds = state.timerData.time % 60
  const minutes = Math.floor(state.timerData.time / 60)
  const secondsString = seconds < 10 ? '0' + seconds : String(seconds)
  const minutesString = minutes < 10 ? '0' + minutes : String(minutes)

  const progress =
    state.targetText.length > 0
      ? Math.min(100, Math.round((state.userInputBuffer.length / state.targetText.length) * 100))
      : 0

  return (
    <div className="my-card flex w-full max-w-5xl shrink-0 rounded-xl bg-white p-4 py-8 opacity-50 transition-colors duration-300 dark:bg-gray-800 sm:w-11/12 md:w-4/5">
      <InfoBox info={`${minutesString}:${secondsString}`} description="时间" />
      <InfoBox info={String(state.timerData.wpm)} description="WPM" />
      <InfoBox info={String(state.timerData.kpm)} description="KPM" />
      <InfoBox info={`${state.timerData.accuracy}%`} description="正确率" />
      <InfoBox info={`${state.timerData.backspaceRate}%`} description="退格率" />
      <InfoBox info={`${progress}%`} description="进度" />
    </div>
  )
}
