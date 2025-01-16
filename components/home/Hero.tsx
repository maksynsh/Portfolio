import { IoNavigate } from 'react-icons/io5'

import { Button, FlipWords, Spotlight, TextRevealEffect } from '../ui'

export const Hero = () => {
  return (
    <section className="flex flex-col w-full pb-20 pt-36">
      <div>
        <Spotlight
          className="top-10 -left-40 md:-left-36 md:top-20 h-screen"
          fill="#a855f7"
        />
        <Spotlight
          className="-top-10 left-3/4 h-[85vh] w-[60vw] invisible md:visible"
          fill="pink"
        />
        <Spotlight
          className="-top-120 left-14 sm:left-52 md:left-64 md:-top-80 z-30"
          fill="white"
        />
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
          <p
            className="inline-block sm:whitespace-nowrap uppercase
              tracking-widest text-xs text-left dark:text-blue-100 w-52 sm:w-80"
          >
            {/* Enthusiast with passion for web technologies */}I build web
            applications that are
            <span>
              <FlipWords
                className="font-bold"
                words={['Beautiful.', 'Slick.', 'Fast.', 'Cute :3', 'Modern.']}
                duration={100}
              />
            </span>
          </p>
          <TextRevealEffect
            as="h1"
            className="text-center text-4xl md:text-5xl lg:text-6xl"
            defaultWordsClassName="bg-clip-text text-transparent bg-gradient-to-b
                    from-slate-50/90 via-slate-300/90 to-slate-500/80 bg-opacity-50"
            words="Turning visions into Flawless Interactions 🚀"
            paintedWordsIndexes={[3, 4]}
            paintedWordsVariant="purpleGradient"
          />
          <h2
            className="text-center text-sm md:text-lg lg:text-2xl tracking-wider
              mb-4 text-glow"
          >
            Hi, I&apos;m Max, a Web Developer based in Ukraine.
          </h2>

          <Button
            href="#about"
            icon={
              <IoNavigate
                className="group-hover:translate-x-1.5 transition-all ease-in"
              />
            }
            iconPosition="right"
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
