import AboutModal from '@/components/AboutModal'
import logo from '@/assets/logo.svg'
import { BRAND } from '@/constants/brand'
import type { PropsWithChildren } from 'react'
import type React from 'react'
import { useState } from 'react'

const Header: React.FC<PropsWithChildren> = ({ children }) => {
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <header className="container z-20 mx-auto w-full px-10 py-6">
      <div className="flex w-full flex-col items-center justify-between space-y-3 lg:flex-row lg:space-y-0">
        <button
          type="button"
          className="group flex items-center gap-3 bg-transparent p-0 text-left"
          onClick={() => setAboutOpen(true)}
          aria-label={`关于 ${BRAND.lockup}`}
          title="产品说明"
        >
          <img
            src={logo}
            className="h-12 w-12 rounded-xl object-contain shadow-sm ring-1 ring-[#0D5E42]/10 transition-transform duration-300 group-hover:scale-[1.04] lg:h-14 lg:w-14"
            alt={`${BRAND.productNameZh} Logo`}
          />
          <div className="flex flex-col leading-tight">
            <h1 className="text-2xl font-bold tracking-tight text-[#0D5E42] dark:text-[#3dba8a] lg:text-3xl">
              {BRAND.productNameZh}
              <span className="ml-2 text-base font-semibold tracking-[0.14em] text-[#0D5E42]/75 dark:text-[#3dba8a]/80 lg:text-lg">
                · {BRAND.productNameEn}
              </span>
            </h1>
            <span className="mt-1 text-[11px] font-medium tracking-wide text-[#0D5E42]/80 dark:text-[#3dba8a]/80 sm:text-xs">
              {BRAND.slogan}
            </span>
            <span className="mt-0.5 text-[11px] font-normal tracking-wide text-gray-500 dark:text-gray-400 sm:text-xs">
              {BRAND.productTagline}
              <span className="mx-1.5 text-gray-300 dark:text-gray-600">·</span>
              <span className="text-gray-400 dark:text-gray-500">{BRAND.fullNameZh} 出品</span>
            </span>
          </div>
        </button>
        <nav className="my-card on element flex w-auto content-center items-center justify-end space-x-3 rounded-xl bg-white p-4 transition-colors duration-300 dark:bg-gray-800">
          {children}
        </nav>
      </div>
      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </header>
  )
}

export default Header
