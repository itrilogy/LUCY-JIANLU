import Tooltip from '@/components/Tooltip'
import SoundSwitcher from '@/pages/Typing/components/SoundSwitcher'
import { isOpenDarkModeAtom } from '@/store'
import { useAtom } from 'jotai'
import IconMoon from '~icons/heroicons/moon-solid'
import IconSun from '~icons/heroicons/sun-solid'
import ArticleSetting from './ArticleSetting'

interface ArticleSwitcherProps {
  onOpenSetting?: () => void
}

/**
 * 文章练习 Header 工具区：
 * - SoundSwitcher / 深色：全局共享
 * - ArticleSetting：文章专用配置
 */
export default function ArticleSwitcher({ onOpenSetting }: ArticleSwitcherProps) {
  const [isOpenDarkMode, setIsOpenDarkMode] = useAtom(isOpenDarkModeAtom)

  return (
    <div className="flex items-center justify-center gap-2">
      <Tooltip content="音效设置（与单词模式共享）">
        <SoundSwitcher />
      </Tooltip>

      <Tooltip className="h-7 w-7" content="文章练习设置">
        <span className="inline-flex">
          <ArticleSetting onOpen={onOpenSetting} />
        </span>
      </Tooltip>

      <Tooltip className="h-7 w-7" content="开关深色模式">
        <button
          className="p-[2px] text-lg text-indigo-500 focus:outline-none"
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            setIsOpenDarkMode((old) => !old)
          }}
          aria-label="开关深色模式"
        >
          {isOpenDarkMode ? <IconMoon className="h-5 w-5" /> : <IconSun className="h-5 w-5" />}
        </button>
      </Tooltip>
    </div>
  )
}
