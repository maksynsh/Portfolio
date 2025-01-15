import { IoNavigate } from 'react-icons/io5'

import { Button, Spotlight, TextRevealEffect } from '../ui'

export const Hero = () => {
  return (
    <section className="flex flex-col w-full pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[85vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="absolute top-0 left-0 h-screen w-full dark:bg-black-100
          bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.03] flex
          items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center
            justify-center dark:bg-black-100 bg-white
            [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="relative flex justify-center my-20 z-10">
        <div
          className="max-w-[89vw] md:max-w-xl lg:max-w-3xl flex flex-col
            items-center justify-center gap-4"
        >
          <h2
            className="uppercase tracking-widest text-xs text-center
              dark:text-blue-100 max-w-80"
          >
            Dynamic Web Magic with Next.js
          </h2>
          <TextRevealEffect
            className="text-center text-4xl md:text-5xl lg:text-6xl"
            words="Turning visions into Flawless Interactions 🚀"
            paintedWordsIndexes={[3, 4]}
            paintedWordsVariant="purple"
          />
          <p
            className="text-center text-sm md:text-lg lg:text-2xl tracking-wider
              mb-4 text-glow"
          >
            Hi, I&apos;m Max, a Web Developer based in Ukraine.
          </p>

          <Button
            href="#about"
            iconRight={
              <IoNavigate
                className="group-hover:translate-x-1.5 transition-all ease-in"
              />
            }
            variant="magic"
            size="lg"
          >
            See my Work
          </Button>
        </div>
      </div>
    </section>
  )
}
