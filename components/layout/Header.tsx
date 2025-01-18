import { IoArrowForward } from 'react-icons/io5'

import { navItems } from '@/data/nav'

import { Button } from '../ui'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <header
      className="fixed top-0 inset-x-0 pointer-events-none z-[1000]
        bg-gradient-to-b from-blue-950/30 dark:from-black/60 pt-6 md:pt-10 px-5
        sm:px-10"
    >
      <div
        className="flex items-center justify-between flex-1 gap-2 max-w-7xl
          mx-auto"
      >
        <div className="flex flex-col flex-1 pointer-events-auto">
          <p className="text-lg">Maksym Sharinov</p>
          <span
            className="text-sm leading-none text-slate-700 dark:text-slate-400
              font-light"
          >
            Web Developer
          </span>
        </div>
        <Navbar className="pointer-events-auto" navItems={navItems} />
        <div
          className="flex-1 pointer-events-auto flex justify-end items-center
            gap-2"
        >
          <Button
            className="rounded-full"
            href="#"
            size="sm"
            variant="ghost"
            icon={<IoArrowForward className="-rotate-45" />}
            iconPosition="right"
          >
            LinkedIn
          </Button>
          <Button
            className="rounded-full"
            href="#"
            size="sm"
            variant="ghost"
            icon={<IoArrowForward className="-rotate-45" />}
            iconPosition="right"
          >
            Resume
          </Button>
        </div>
      </div>
    </header>
  )
}
