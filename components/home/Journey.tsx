import { ReactNode, useMemo } from 'react'

import { journey } from '@/lib/data/journey'

import { Timeline } from '../ui'

export const Journey = () => {
  const timeline = useMemo(
    () =>
      journey.map(journey => ({
        title: journey.title,
        content: <JourneyItem {...journey.data} />,
      })),
    [],
  )

  return (
    <section
      id="journey"
      className="scroll-m-6 py-20 flex flex-col gap-16 md:gap-24"
    >
      <div
        className="flex flex-col items-center gap-4 mx-auto text-center max-w-md
          md:max-w-xl lg:max-w-2xl"
      >
        <h2 className="font-semibold tracking-wide text-4xl md:text-5xl">
          Changelog from <span className="text-purple">my journey</span>
        </h2>
        <p
          className="text-gray-700 dark:text-blue-100 text-sm md:text-base
            max-w-sm"
        >
          I&apos;ve been working on Web Applications for almost{' '}
          {new Date().getFullYear() - 2020} years now. Here&apos;s a timeline of
          my journey.
        </p>
      </div>
      <Timeline data={timeline} />
    </section>
  )
}

export interface JourneyItemProps {
  title: string
  description: string
  images?: { src: string; alt: string }[]
  children?: ReactNode
}

const JourneyItem = ({
  title,
  description,
  images,
  children,
}: JourneyItemProps) => {
  return (
    <article className="space-y-8">
      <header>
        <h4
          className="text-black dark:text-white md:text-lg font-medium text-glow
            tracking-wider uppercase"
        >
          {title}
        </h4>
        <p
          className="text-gray-950 dark:text-gray-300 text-sm md:text-base
            font-normal"
        >
          {description}
        </p>
      </header>
      <div className="grid grid-cols-2 gap-4">
        {images?.map(({ src, alt }, i) => (
          <img
            key={i}
            src={src}
            alt={alt}
            width={500}
            height={500}
            loading="lazy"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full
              shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        ))}
      </div>
      {children}
    </article>
  )
}
