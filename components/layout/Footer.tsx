import { LINKS } from '@/data/contacts'

import { Button } from '../ui'

export const Footer = () => {
  return (
    <footer className="relative w-full py-10 bg-black-100">
      <div className="absolute bottom-0 inset-x-0 h-150 pointer-events-none">
        <img
          className="size-full opacity-60 object-top object-cover"
          src="/images/bg/footer-grid.svg"
          alt="Footer BG"
        />
      </div>

      <div className="flex justify-between max-w-7xl w-full sm:px-10 px-5 gap-4">
        <div className="space-y-2">
          <p className="text-sm sm:text-base">
            © {new Date().getFullYear()} Maksym Sharinov. All Rights Reserved.
          </p>
          <span className="text-gray-700 dark:text-blue-100 text-xs sm:text-sm">
            Made with love and Green Tea (no sugar).
          </span>
        </div>
        <ul className="flex gap-4">
          <li>
            <Button href={LINKS.LINKEDIN.url} size="icon" variant="icon">
              <LINKS.LINKEDIN.icon className="size-5" />
            </Button>
          </li>
          <li>
            <Button href={LINKS.CV.url} size="icon" variant="icon">
              <LINKS.CV.icon className="size-5" />
            </Button>
          </li>
          <li className="hidden md:block">
            <Button href={LINKS.EMAIL.url} size="icon" variant="icon">
              <LINKS.EMAIL.icon className="size-5" />
            </Button>
          </li>
        </ul>
      </div>
    </footer>
  )
}
