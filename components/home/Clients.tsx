import { PARTNERS, TESTIMONIALS } from '@/lib/data/clients'
import { InfiniteMarquee, Paper, Tooltip } from '../ui'
import { useMemo } from 'react'
import Image from 'next/image'

export const Clients = () => {
  const testimonials = useMemo(() => TESTIMONIALS, [])
  return (
    <section id="clients" className="scroll-m-6 py-20 flex flex-col gap-10">
      <h2
        className="font-semibold tracking-wide text-center text-4xl md:text-5xl
          max-w-md md:max-w-xl mx-auto"
      >
        Kind words from{' '}
        <span className="text-purple">people I worked with</span>
      </h2>

      <div
        className="flex flex-col lg:flex-row items-center justify-center w-full
          gap-6 md:gap-12 mx-auto px-8"
      >
        <InfiniteMarquee
          speed="slow"
          direction="right"
          listClassName="gap-5 md:gap-10 lg:gap-16 py-8"
        >
          {testimonials.map(({ author, quote, url, source }) => (
            <Paper
              key={quote + Math.random()}
              as="li"
              className="relative px-8 py-6 w-100 md:w-128"
              borderGlowingEffect
            >
              <blockquote className="flex flex-col justify-between h-full gap-4">
                <div>
                  <p
                    className="relative z-20 whitespace-pre-wrap leading-normal
                      tracking-wider font-medium line-clamp-5 md:line-clamp-none
                      text-neutral-800 dark:text-gray-100"
                  >
                    {quote}
                  </p>
                </div>

                <div
                  className="relative z-20 flex flex-row gap-3 w-full
                    text-neutral-500 dark:text-gray-400"
                >
                  <a className="relative" target="_blank" href={author.url}>
                    <Tooltip
                      title={author.name}
                      description={author.designation}
                    >
                      <Image
                        className="rounded-full size-11"
                        width={44}
                        height={44}
                        src={author.avatarImageUrl}
                        alt=""
                      />
                    </Tooltip>
                  </a>
                  <span className="flex flex-col gap-1">
                    <a target="_blank" href={author.url}>
                      <span>{author.name}</span>
                    </a>
                  </span>

                  <a
                    href={url}
                    target="_blank"
                    className="p-0.5 ml-auto mt-auto opacity-75
                      hover:opacity-100 transition-opacity"
                  >
                    {<source.icon className="size-7" />}
                  </a>
                </div>
              </blockquote>
            </Paper>
          ))}
        </InfiniteMarquee>
      </div>

      <div
        className="flex flex-wrap mx-auto justify-center gap-x-12 md:gap-x-16
          gap-y-5 max-w-screen-lg"
      >
        {PARTNERS.map(({ img, name }) => (
          <Image
            key={img}
            width={144}
            height={144}
            className="min-h-14 w-36 object-contain"
            src={img}
            alt={name}
          />
        ))}
      </div>
    </section>
  )
}
