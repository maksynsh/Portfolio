import { journey } from '@/data/journey'

import { Timeline } from '../ui'

export const Journey = () => {
  return (
    <section id="journey" className="py-20 flex flex-col gap-10">
      <div
        className="flex flex-col items-center gap-4 mx-auto text-center max-w-md
          md:max-w-xl lg:max-w-2xl"
      >
        <h2 className="font-semibold tracking-wide text-4xl md:text-5xl">
          Changelog from <span className="text-purple">my journey</span>
        </h2>
        <h3
          className="text-neutral-700 dark:text-blue-100 text-sm md:text-base
            max-w-sm"
        >
          I&apos;ve been working on Web Applications for almost{' '}
          {new Date().getFullYear() - 2020} years now. Here&apos;s a timeline of
          my journey.
        </h3>
      </div>
      <Timeline data={journey} />
    </section>
  )
}
