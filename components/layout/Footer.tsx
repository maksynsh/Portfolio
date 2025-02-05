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

      <div
        className="flex justify-between max-w-7xl w-full mx-auto sm:px-10 px-5
          gap-4"
      >
        <div className="space-y-2">
          <p className="text-sm sm:text-base">
            © {new Date().getFullYear()} Maksym Sharinov. All Rights Reserved.
          </p>
          <span className="text-gray-950 dark:text-gray-300 text-xs sm:text-sm">
            Made with love and Green Tea (no sugar).
          </span>
        </div>
        <ul className="flex gap-4">
          {[LINKS.LINKEDIN, LINKS.CV, LINKS.EMAIL].map(
            ({ url, icon: Icon }) => (
              <li key={url}>
                <Button href={url} size="icon" variant="icon">
                  <Icon className="size-5" />
                </Button>
              </li>
            ),
          )}
        </ul>
      </div>
    </footer>
  )
}
