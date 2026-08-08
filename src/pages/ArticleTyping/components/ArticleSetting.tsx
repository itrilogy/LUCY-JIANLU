import styles from '@/pages/Typing/components/Setting/index.module.css'
import {
  articleTypingConfigAtom,
  fontSizeConfigAtom,
  hintSoundsConfigAtom,
  isOpenDarkModeAtom,
  keySoundsConfigAtom,
} from '@/store'
import type { ArticleTabWidth, ArticleTypingConfig } from '../config'
import { defaultArticleTypingConfig } from '../config'
import { Dialog, Switch, Transition } from '@headlessui/react'
import { useAtom } from 'jotai'
import { Fragment, useCallback, useState } from 'react'
import IconCog6Tooth from '~icons/heroicons/cog-6-tooth-solid'
import IconX from '~icons/tabler/x'

interface ArticleSettingProps {
  /** 打开设置时暂停练习 */
  onOpen?: () => void
}

/**
 * 文章练习专用设置弹窗（视觉对齐单词 Setting，语义分轨）
 */
export default function ArticleSetting({ onOpen }: ArticleSettingProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [config, setConfig] = useAtom(articleTypingConfigAtom)
  const [isOpenDarkMode] = useAtom(isOpenDarkModeAtom)
  const [keySoundsConfig] = useAtom(keySoundsConfigAtom)
  const [hintSoundsConfig] = useAtom(hintSoundsConfigAtom)
  const [fontSizeConfig] = useAtom(fontSizeConfigAtom)

  const openModal = () => {
    setIsOpen(true)
    onOpen?.()
  }

  const closeModal = () => setIsOpen(false)

  const patch = useCallback(
    (partial: Partial<ArticleTypingConfig>) => {
      setConfig((prev) => ({ ...prev, ...partial }))
    },
    [setConfig],
  )

  const onReset = () => {
    setConfig({ ...defaultArticleTypingConfig })
  }

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          openModal()
        }}
        className={`flex items-center justify-center rounded p-[2px] text-lg text-indigo-500 outline-none transition-colors duration-300 ease-in-out hover:bg-indigo-400 hover:text-white ${
          isOpen ? 'bg-indigo-500 text-white' : ''
        }`}
        title="文章练习设置"
        aria-label="打开文章练习设置"
      >
        <IconCog6Tooth className="icon" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="flex w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white p-0 shadow-xl dark:bg-gray-800"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative flex items-center justify-between border-b border-neutral-100 bg-stone-50 px-6 py-4 dark:border-neutral-700 dark:bg-gray-900">
                    <Dialog.Title className="text-xl font-bold text-gray-700 dark:text-gray-200">
                      文章 / 代码练习设置
                    </Dialog.Title>
                    <button type="button" onClick={closeModal} title="关闭">
                      <IconX className="h-5 w-5 text-gray-400" />
                    </button>
                  </div>

                  <div className="max-h-[70vh] overflow-y-auto px-2 py-2">
                    <div className={styles.tabContent} style={{ paddingBottom: '2rem' }}>
                      {/* 共享全局（只读提示） */}
                      <div className={styles.section}>
                        <span className={styles.sectionLabel}>与单词模式共享</span>
                        <span className={styles.sectionDescription}>
                          下列项使用全局配置，在单词 Setting 中修改也会同步生效
                        </span>
                        <div className="mt-1 w-full space-y-2 rounded-xl bg-gray-50 px-4 py-3 text-left text-xs text-gray-600 dark:bg-gray-900/60 dark:text-gray-300">
                          <p>深色模式：{isOpenDarkMode ? '开' : '关'}</p>
                          <p>按键音：{keySoundsConfig.isOpen ? '开' : '关'}</p>
                          <p>提示音：{hintSoundsConfig.isOpen ? '开' : '关'}</p>
                          <p>外语字号：{fontSizeConfig.foreignFont}px（代码区按比例缩放）</p>
                        </div>
                      </div>

                      {/* 跳过注释 */}
                      <div className={styles.section}>
                        <span className={styles.sectionLabel}>跳过英文注释</span>
                        <span className={styles.sectionDescription}>
                          开启后，`//` / `#` / `/*` 注释行不参与敲击（`//:` 说明卡始终只读）
                        </span>
                        <div className={styles.switchBlock}>
                          <Switch
                            checked={config.skipComments}
                            onChange={(v) => patch({ skipComments: v })}
                            className="switch-root"
                          >
                            <span aria-hidden="true" className="switch-thumb" />
                          </Switch>
                          <span className="text-right text-xs text-gray-600">
                            {config.skipComments ? '已跳过注释' : '注释需敲击'}
                          </span>
                        </div>
                      </div>

                      {/* Tab 宽度 */}
                      <div className={styles.section}>
                        <span className={styles.sectionLabel}>Tab 宽度</span>
                        <span className={styles.sectionDescription}>Tab 键插入的空格数量</span>
                        <div className="flex gap-2 pl-4">
                          {([2, 4] as ArticleTabWidth[]).map((w) => (
                            <button
                              key={w}
                              type="button"
                              onClick={() => patch({ tabWidth: w })}
                              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                                config.tabWidth === w
                                  ? 'bg-indigo-500 text-white'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200'
                              }`}
                            >
                              {w} 空格
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* 智能缩进 */}
                      <div className={styles.section}>
                        <span className={styles.sectionLabel}>智能缩进</span>
                        <span className={styles.sectionDescription}>
                          按 Enter 换行时，自动补齐目标文本下一行的前导空格/Tab
                        </span>
                        <div className={styles.switchBlock}>
                          <Switch
                            checked={config.smartIndent}
                            onChange={(v) => patch({ smartIndent: v })}
                            className="switch-root"
                          >
                            <span aria-hidden="true" className="switch-thumb" />
                          </Switch>
                          <span className="text-right text-xs text-gray-600">
                            {config.smartIndent ? '已开启' : '已关闭'}
                          </span>
                        </div>
                      </div>

                      {/* 忽略大小写 */}
                      <div className={styles.section}>
                        <span className={styles.sectionLabel}>忽略大小写</span>
                        <span className={styles.sectionDescription}>
                          代码练习建议关闭；英文段落可按需开启
                        </span>
                        <div className={styles.switchBlock}>
                          <Switch
                            checked={config.ignoreCase}
                            onChange={(v) => patch({ ignoreCase: v })}
                            className="switch-root"
                          >
                            <span aria-hidden="true" className="switch-thumb" />
                          </Switch>
                          <span className="text-right text-xs text-gray-600">
                            {config.ignoreCase ? '已忽略' : '区分大小写'}
                          </span>
                        </div>
                      </div>

                      {/* 说明卡片 */}
                      <div className={styles.section}>
                        <span className={styles.sectionLabel}>显示逻辑说明卡片</span>
                        <span className={styles.sectionDescription}>
                          显示源码中 `//:` / `#:` 标记的只读中文说明
                        </span>
                        <div className={styles.switchBlock}>
                          <Switch
                            checked={config.showExplanations}
                            onChange={(v) => patch({ showExplanations: v })}
                            className="switch-root"
                          >
                            <span aria-hidden="true" className="switch-thumb" />
                          </Switch>
                          <span className="text-right text-xs text-gray-600">
                            {config.showExplanations ? '显示' : '隐藏'}
                          </span>
                        </div>
                      </div>

                      {/* 自动滚动 */}
                      <div className={styles.section}>
                        <span className={styles.sectionLabel}>光标行自动滚动</span>
                        <span className={styles.sectionDescription}>
                          输入时将当前行滚动到练习区中央
                        </span>
                        <div className={styles.switchBlock}>
                          <Switch
                            checked={config.autoScroll}
                            onChange={(v) => patch({ autoScroll: v })}
                            className="switch-root"
                          >
                            <span aria-hidden="true" className="switch-thumb" />
                          </Switch>
                          <span className="text-right text-xs text-gray-600">
                            {config.autoScroll ? '已开启' : '已关闭'}
                          </span>
                        </div>
                      </div>

                      <div className="flex w-full justify-end gap-3 px-4 pt-2">
                        <button
                          type="button"
                          onClick={onReset}
                          className="rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          恢复默认
                        </button>
                        <button type="button" onClick={closeModal} className="my-btn-primary px-5 py-2 text-sm">
                          完成
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
