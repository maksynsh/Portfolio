'use client'
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

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
  const [activeTab, setActiveTab] = useState(navItems[0])
  const handler = useRef<NodeJS.Timeout>(null)
  const ignoreObserver = useRef(false)
  const ignoreTimeout = useRef<NodeJS.Timeout>(null)

  const isHomePage = () =>
    useMemo(() => {
      if (typeof window !== 'undefined') {
        return window.location.pathname === '/'
      }
      return false
    }, [])

  // Listen for hash changes (tab clicks update hash)
  useEffect(() => {
    const onHashChange = () => {
      ignoreObserver.current = true
      setActiveTab(
        navItems.find(tab => tab.url === window.location.hash) ?? navItems[0],
      )
      // Ignore observer for a short period after hash change
      if (ignoreTimeout.current) clearTimeout(ignoreTimeout.current)
      ignoreTimeout.current = setTimeout(() => {
        ignoreObserver.current = false
      }, 700)
    }

    window.addEventListener('hashchange', onHashChange)
    return () => {
      window.removeEventListener('hashchange', onHashChange)
      if (ignoreTimeout.current) clearTimeout(ignoreTimeout.current)
    }
  }, [navItems])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveTab(
        navItems.find(tab => tab.url === window.location.hash) ?? navItems[0],
      )
    }

    const sections = navItems
      .map(item => document.getElementById(item.url.replace('#', '')))
      .filter(section => section !== null) as HTMLElement[]

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      entries => {
        if (ignoreObserver.current) return
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            if (id) {
              const matchedTab = navItems.find(tab => tab.url === `#${id}`)
              if (matchedTab) {
                if (handler.current) {
                  clearTimeout(handler.current)
                }
                handler.current = setTimeout(() => {
                  setActiveTab(matchedTab)
                  window.history.replaceState(null, '', `#${id}`)
                }, 400)
              }
            }
          }
        }
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      },
    )

    sections.forEach(section => observer.observe(section))

    return () => {
      observer.disconnect()
      if (handler.current) clearTimeout(handler.current)
    }
  }, [navItems])

  return (
    <nav
      className={cn('flex max-w-fit items-center justify-center', className)}
    >
      <Tabs
        id="navbar-tabs"
        tabs={navItems.map(item => ({ ...item, url: '/' + item.url }))}
        activeTab={isHomePage() ? activeTab : undefined}
        defaultTab={activeTab}
        containerClassName={`bg-gray-400/5 saturate-50 hover:brightness-110 transition-all 
            backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-md gap-2`}
        activeTabClassName="bg-gray-500/10 dark:bg-gray-700/20"
        onlyIconsOnMobile
      />
    </nav>
  )
}
