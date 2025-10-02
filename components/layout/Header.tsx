import { IoArrowForward } from 'react-icons/io5'

import { LINKS } from '@/lib/data/contacts'
import { navItems } from '@/lib/data/nav'

import { Button } from '../ui'
import { Navbar } from './Navbar'
import { PortfolioIcon } from './PortfolioIcon'

export const Header = () => {
  return (
    <header
      className="fixed top-0 inset-x-0 pointer-events-none z-[1000]
        bg-gradient-to-b from-blue-950/30 dark:from-black/60 pt-6 md:pt-10 px-5
        sm:px-10"
    >
      <div
        className="flex items-center justify-between flex-1 gap-3 max-w-7xl
          mx-auto"
      >
        <div className="flex-1">
          <PortfolioIcon />
        </div>

        <Navbar className="pointer-events-auto" navItems={navItems} />

        <div className="flex-1 flex justify-end">
          <div className="hidden sm:flex items-center gap-2 pointer-events-auto">
            <Button
              className="rounded-full"
              href={LINKS.LINKEDIN.url}
              size="sm"
              variant="ghost"
            >
              {LINKS.LINKEDIN.name}
              <IoArrowForward className="-rotate-45" />
            </Button>
            <Button
              className="rounded-full"
              href={LINKS.CV.url}
              size="sm"
              variant="ghost"
            >
              {LINKS.CV.name}
              <IoArrowForward className="-rotate-45" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
