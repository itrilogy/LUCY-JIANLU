import logo from '@/assets/logo.svg'
import labLogo from '@/assets/lab-logo.svg'
import { BRAND } from '@/constants/brand'
import { Dialog, Transition } from '@headlessui/react'
import type React from 'react'
import { Fragment } from 'react'

type AboutModalProps = {
  open: boolean
  onClose: () => void
}

const AboutModal: React.FC<AboutModalProps> = ({ open, onClose }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all dark:bg-gray-800 sm:my-8">
                <div className="px-6 pb-5 pt-7 sm:px-8">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={logo}
                      alt={BRAND.lockup}
                      className="h-16 w-16 rounded-2xl object-contain shadow-sm ring-1 ring-[#0D5E42]/10"
                    />
                    <Dialog.Title as="h2" className="mt-4 text-2xl font-bold tracking-tight text-[#0D5E42] dark:text-[#3dba8a]">
                      {BRAND.lockup}
                    </Dialog.Title>
                    <p className="mt-1 text-sm font-medium text-[#0D5E42]/80 dark:text-[#3dba8a]/80">{BRAND.slogan}</p>
                    <p className="mt-0.5 text-xs tracking-wide text-gray-400">{BRAND.sloganEn}</p>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{BRAND.description}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{BRAND.mission}</p>

                  <div className="my-5 h-px bg-gray-100 dark:bg-gray-700" />

                  <p className="text-center text-[11px] font-semibold tracking-[0.18em] text-gray-400">出品</p>
                  <div className="mt-3 flex items-center justify-center gap-4">
                    <div className="flex flex-col items-center gap-1">
                      <img src={logo} alt={BRAND.lockup} className="h-12 w-12 rounded-xl object-contain ring-1 ring-[#0D5E42]/10" />
                      <span className="text-[11px] font-medium text-gray-600 dark:text-gray-300">{BRAND.lockup}</span>
                    </div>
                    <span className="text-gray-300 dark:text-gray-600" aria-hidden>
                      ×
                    </span>
                    <div className="flex flex-col items-center gap-1">
                      <img src={labLogo} alt={BRAND.fullNameZh} className="h-12 w-auto object-contain" />
                      <span className="text-[11px] font-medium text-gray-600 dark:text-gray-300">{BRAND.fullNameZh}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-center text-xs text-gray-400">{BRAND.fullNameEn}</p>

                  <p className="mt-5 text-center text-[11px] leading-relaxed text-gray-400">
                    基于开源项目{' '}
                    <a
                      href="https://github.com/Kaiyiwing/qwerty-learner"
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-[#0D5E42] underline-offset-2 hover:underline dark:text-[#3dba8a]"
                    >
                      Qwerty Learner
                    </a>{' '}
                    二次开发
                  </p>
                </div>

                <div className="bg-[#0D5E42]/[0.04] px-6 py-4 dark:bg-gray-900/40 sm:px-8">
                  <button
                    type="button"
                    className="w-full rounded-xl bg-[#0D5E42] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0a4a34]"
                    onClick={onClose}
                  >
                    知道了
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default AboutModal
