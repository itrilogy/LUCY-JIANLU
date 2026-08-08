import Tooltip from '@/components/Tooltip'
import { Transition } from '@headlessui/react'
import { useCallback, useMemo } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { useNavigate } from 'react-router-dom'
import IconX from '~icons/tabler/x'
import type { ArticleTypingState } from '../store/type'

interface ArticleResultModalProps {
  articleName: string
  state: ArticleTypingState
  onRestart: () => void
  onClose: () => void
}

/**
 * 文章练习完成弹窗，交互形态对齐单词模式 ResultScreen（全屏遮罩 + 居中卡片）
 */
export default function ArticleResultModal({
  articleName,
  state,
  onRestart,
  onClose,
}: ArticleResultModalProps) {
  const navigate = useNavigate()

  const timeString = useMemo(() => {
    const seconds = state.timerData.time
    const minutes = Math.floor(seconds / 60)
    const minuteString = minutes < 10 ? '0' + minutes : String(minutes)
    const restSeconds = seconds % 60
    const secondString = restSeconds < 10 ? '0' + restSeconds : String(restSeconds)
    return `${minuteString}:${secondString}`
  }, [state.timerData.time])

  const onOpenGallery = useCallback(() => {
    navigate('/gallery?mode=article', { state: { from: 'article' } })
  }, [navigate])

  useHotkeys('enter', () => onRestart(), { preventDefault: true })
  useHotkeys('escape', () => onClose(), { preventDefault: true })

  return (
    <div className="fixed inset-0 z-30 overflow-y-auto">
      <div className="absolute inset-0 bg-gray-300 opacity-80 dark:bg-gray-600" />
      <Transition
        show
        appear
        enter="ease-in duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-out duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="my-card relative flex w-[90vw] max-w-2xl flex-col overflow-hidden rounded-3xl bg-white px-8 pb-10 pt-10 shadow-lg dark:bg-gray-800 md:w-4/5">
            <button
              type="button"
              className="absolute right-6 top-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              onClick={onClose}
              aria-label="关闭"
            >
              <IconX className="h-6 w-6" />
            </button>

            <div className="text-center font-sans text-xl font-normal text-gray-900 dark:text-gray-300 md:text-2xl">
              🎉 完成练习
            </div>
            <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
              《{articleName}》
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <MetricCard label="正确率" value={`${state.timerData.accuracy}%`} accent="text-amber-500" />
              <MetricCard label="WPM" value={String(state.timerData.wpm)} accent="text-emerald-500" />
              <MetricCard label="KPM" value={String(state.timerData.kpm)} accent="text-cyan-500" />
              <MetricCard label="耗时" value={timeString} accent="text-indigo-500" />
              <MetricCard label="退格率" value={`${state.timerData.backspaceRate}%`} accent="text-rose-500" />
              <MetricCard label="错误键" value={String(state.errorKeystrokes)} accent="text-rose-500" />
            </div>

            <div className="mt-4 rounded-xl bg-indigo-50 px-4 py-3 text-center text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-300">
              退格修正 <span className="font-bold text-rose-500">{state.backspaceCount}</span> 次 · 总按键{' '}
              <span className="font-bold text-indigo-500">{state.totalKeystrokes}</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={onRestart}
                className="my-btn-primary px-6 py-2 text-sm shadow"
              >
                再练一遍 (Enter)
              </button>
              <Tooltip content="选择其他文章 / 代码">
                <button
                  type="button"
                  onClick={onOpenGallery}
                  className="rounded-lg border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                >
                  换一篇
                </button>
              </Tooltip>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg px-5 py-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                关闭 (Esc)
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

function MetricCard({
  label,
  value,
  accent,
}: {
  label: string
  value: string
  accent: string
}) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-gray-50 px-3 py-4 dark:bg-gray-900/50">
      <span className={`text-2xl font-bold font-mono ${accent}`}>{value}</span>
      <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">{label}</span>
    </div>
  )
}
