'use client'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import { ReactNode, useMemo, useState } from 'react'

import { cn } from '@/utils'

import { Tabs } from '../ui'

export interface NavItem {
  name: string
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

  const navTabs = useMemo(
    () =>
      navItems.map(n => ({
        title: n.name,
        value: n.name,
        url: n.url,
      })),
    [navItems],
  )

  return (
    <AnimatePresence mode="wait">
      <motion.div
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
          tabs={navTabs}
          defaultTab={navTabs[0]}
          containerClassName={`bg-gray-400/5 saturate-50 hover:brightness-110 transition-all 
            backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-md gap-2`}
          activeTabClassName="bg-gray-500/10 dark:bg-gray-700/20"
        />
        {/* {navItems.map((navItem, idx: number) => (
          <Link
            key={`nav-link=${idx}`}
            href={navItem.url}
            className={cn(
              `relative dark:text-neutral-50 items-center flex space-x-1
              text-neutral-600 dark:hover:text-neutral-300
              hover:text-neutral-500`,
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))} */}
      </motion.div>
    </AnimatePresence>
  )
}
