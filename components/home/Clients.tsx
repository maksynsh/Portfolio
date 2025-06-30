import { TESTIMONIALS } from '@/data/clients'
import { InfiniteMarquee, Paper, Tooltip } from '../ui'

export const Clients = () => {
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
        className="py-12 flex flex-col lg:flex-row items-center justify-center
          w-full gap-6 md:gap-12 mx-auto px-8"
      >
        <InfiniteMarquee
          speed="slow"
          direction="right"
          listClassName="gap-5 md:gap-10 lg:gap-16 pb-8"
        >
          {TESTIMONIALS.map(({ author, quote, url, source }) => (
            <>
              <Paper
                key={quote}
                as="li"
                className="relative px-8 py-6 w-100 md:w-128"
                borderGlowingEffect
              >
                <blockquote
                  className="flex flex-col justify-between h-full gap-4"
                >
                  <div>
                    <Tooltip
                      title={author.name}
                      description={author.designation}
                    >
                      <p
                        className="relative z-20 whitespace-pre-wrap
                          leading-normal tracking-wider font-medium line-clamp-5
                          md:line-clamp-none text-neutral-800
                          dark:text-gray-100"
                      >
                        {quote}
                      </p>
                    </Tooltip>
                  </div>

                  <div
                    className="relative z-20 flex flex-row gap-3 w-full
                      text-neutral-500 dark:text-gray-400"
                  >
                    <Tooltip
                      title={author.name}
                      description={author.designation}
                    >
                      <a target="_blank" href={author.url}>
                        <img
                          className="rounded-full size-11"
                          src={author.avatarImageUrl}
                          alt={author.name}
                        />
                      </a>
                    </Tooltip>
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
            </>
          ))}
        </InfiniteMarquee>
      </div>
    </section>
  )
}
