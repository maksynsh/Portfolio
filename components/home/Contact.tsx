import { IoNavigate } from 'react-icons/io5'

import { LINKS } from '@/data/contacts'

import { Button } from '../ui'

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-20 scroll-m-6 py-20 flex flex-col items-center"
    >
      <h2
        className="text-center font-semibold tracking-wide text-4xl md:text-5xl"
      >
        Ready to take <span className="text-purple">the next step?</span>
      </h2>
      <p className="text-gray-700 dark:text-blue-100 text-center my-5 max-w-sm">
        Let&apos;s discuss how we can achieve your goals.
      </p>
      <Button
        href={LINKS.EMAIL.url}
        icon={
          <IoNavigate
            className="group-hover:translate-x-1.5 transition-all ease-in"
          />
        }
        iconPosition="right"
        variant="magic"
        size="lg"
      >
        Get in touch
      </Button>
    </section>
  )
}
