'use client'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
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
  const { scrollYProgress } = useScroll()

  const [visible, setVisible] = useState(true)

  useMotionValueEvent(scrollYProgress, 'change', current => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      const direction = current! - scrollYProgress.getPrevious()!

      if (direction < 0) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
  })
  const [defaultTab, setDefaultTab] = useState(navItems[0])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDefaultTab(
        navItems.find(tab => tab.url === window.location.hash) ?? navItems[0],
      )
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          `flex max-w-fit fixed top-10 inset-x-0 mx-auto z-[5000] items-center
          justify-center`,
          className,
        )}
      >
        <Tabs
          tabs={navItems}
          defaultTab={defaultTab}
          containerClassName={`bg-gray-400/5 saturate-50 hover:brightness-110 transition-all 
            backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-md gap-2`}
          activeTabClassName="bg-gray-500/10 dark:bg-gray-700/20"
          onlyIconsOnMobile
        />
      </motion.nav>
    </AnimatePresence>
  )
}
