'use client'
import { ReactNode, useEffect, useState } from 'react'

import { cn } from '@/utils'

import { Tabs } from '../ui'

export interface NavItem {
  title: string
  value: string
  url: string
  icon?: ReactNode
}

export const Navbar = ({
  navItems,
  className,
}: {
  navItems: NavItem[]
  className?: string
}) => {
  const [defaultTab, setDefaultTab] = useState(navItems[0])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDefaultTab(
        navItems.find(tab => tab.url === window.location.hash) ?? navItems[0],
      )
    }
  }, [])

  return (
    <nav
      className={cn('flex max-w-fit items-center justify-center', className)}
    >
      <Tabs
        tabs={navItems}
        defaultTab={defaultTab}
        containerClassName={`bg-gray-400/5 saturate-50 hover:brightness-110 transition-all 
            backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-md gap-2`}
        activeTabClassName="bg-gray-500/10 dark:bg-gray-700/20"
        onlyIconsOnMobile
      />
    </nav>
  )
}
