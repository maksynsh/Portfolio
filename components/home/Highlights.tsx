import { IoArrowForward } from 'react-icons/io5'

import { projects } from '@/data/projects'

import { Button, Paper, PinContainer } from '../ui'

export const Highlights = () => {
  return (
    <section id="projects" className="py-20 flex flex-col gap-24">
      <h2
        className="font-semibold tracking-wide text-center text-4xl md:text-5xl
          max-w-md md:max-w-xl mx-auto"
      >
        A brief showcase of my <span className="text-purple">recent work</span>
      </h2>
      <ul
        className="flex flex-wrap items-center justify-center p-4 gap-x-24
          gap-y-[20vh] 2xl:gap-y-[18vh]"
      >
        {projects.map(
          ({ id, title, description, technologiesUsed, img, link }) => (
            <li
              key={id}
              className="flex items-center justify-center min-h-[30vh]
                sm:min-h-[30vh] lg:min-h-[32vh] max-w-140 w-full sm:w-140"
            >
              <PinContainer className="group" title={link} href={link}>
                <Paper
                  as="article"
                  className="relative flex items-center justify-center w-[80vw]
                    sm:w-140 h-[30vh] sm:h-[30vh] lg:h-[32vh] overflow-hidden
                    mb-4"
                >
                  <div
                    className="relative size-full overflow-hidden
                      lg:rounded-3xl"
                  >
                    <img src="/images/bg/bg.png" alt="Background image" />
                  </div>

                  <img
                    src={img}
                    alt={title}
                    className="absolute z-10 sm:-bottom-16 scale-90
                      sm:scale-[84%] antialiased rounded-3xl rotate-[5deg]
                      shadow border border-white/5 brightness-95"
                    loading="lazy"
                  />
                </Paper>

                <h3
                  className="font-bold md:text-xl lg:text-2xl line-clamp-1
                    group-hover:text-glow transition-all mb-2"
                >
                  {title}
                </h3>

                <p
                  className="text-slate-400 text-sm md:text-base lg:text-lg
                    font-light lg:font-medium line-clamp-2"
                >
                  {description}
                </p>

                <div className="flex items-center justify-between mt-5 mb-2">
                  <div className="flex items-center -space-x-2.5">
                    {technologiesUsed.map(({ title, img }) => (
                      <div
                        key={title}
                        className="border border-white/20 rounded-full
                          bg-black-100 size-8 lg:size-10 flex justify-center
                          items-center"
                      >
                        <img
                          className="p-1.5"
                          src={img}
                          alt={title}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>

                  <Button
                    className="text-sm md:text-base dark:text-purple"
                    variant="link"
                    size="link"
                    icon={<IoArrowForward className="size-5 md:size-6" />}
                    iconPosition="right"
                  >
                    Check out live
                  </Button>
                </div>
              </PinContainer>
            </li>
          ),
        )}
      </ul>
    </section>
  )
}
