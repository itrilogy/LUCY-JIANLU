import { GalleryContext } from '.'
import codeFlag from '@/assets/flags/code.png'
import enFlag from '@/assets/flags/en.png'
import { RadioGroup } from '@headlessui/react'
import { useCallback, useContext } from 'react'

type ArticleTabOption = {
  id: string
  name: string
  flag?: string
}

/**
 * 文章语种/轨道切换：布局 1:1 对齐 LanguageTabSwitcher
 * （单行 space-x-4 + 下划线，不用 flex-wrap 以免与单词顶栏不一致）
 */
const options: ArticleTabOption[] = [
  { id: 'all', name: '全部' },
  { id: 'code', name: 'Code', flag: codeFlag },
  { id: 'javascript', name: 'JS / TS', flag: codeFlag },
  { id: 'python', name: 'Python', flag: codeFlag },
  { id: 'english', name: '英文', flag: enFlag },
  { id: 'sophie-philosophy', name: '苏菲哲学' },
  { id: 'knowledge-eng', name: '知识工程' },
  { id: 'finance-concept', name: 'SAFTI' },
  { id: 'fintech-code', name: 'FinTech码' },
]

export function ArticleLanguageTabSwitcher() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { state, setState } = useContext(GalleryContext)!

  const onChangeTab = useCallback(
    (tab: string) => {
      setState((draft) => {
        draft.currentArticleLanguageTab = tab
      })
    },
    [setState],
  )

  return (
    <RadioGroup value={state.currentArticleLanguageTab} onChange={onChangeTab}>
      <div className="flex items-center space-x-4">
        {options.map((option) => (
          <RadioGroup.Option key={option.id} value={option.id} className="cursor-pointer">
            {({ checked }) => (
              <div className={`flex items-center border-b-2 px-2 pb-1 ${checked ? 'border-indigo-500' : 'border-transparent'}`}>
                {option.flag ? <img src={option.flag} className="mr-1.5 h-7 w-7" alt="" /> : null}
                <p className="text-lg font-medium text-gray-700 dark:text-gray-200">{option.name}</p>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
