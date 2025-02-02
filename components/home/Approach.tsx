import { Card, RevealEffect } from '../ui'

export const Approach = () => {
  return (
    <section id="approach" className="py-20 flex flex-col gap-10">
      <h2
        className="font-semibold tracking-wide text-center text-4xl md:text-5xl
          max-w-md md:max-w-xl mx-auto"
      >
        My <span className="text-purple">approach</span>
      </h2>

      <div
        className="py-20 flex flex-col lg:flex-row items-center justify-center
          w-full gap-6 md:gap-12 mx-auto px-8"
      >
        <Card
          className="cursor-pointer"
          title="Research & Planning"
          description="After discussing an idea in detail, I conduct research, estimate possible risks and carefully think about the approach we are going to use."
          tag="Step 1"
          img="/images/misc/exp3.svg"
        >
          <RevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-600/50"
            colors={[[125, 211, 252]]}
            dotSize={2.5}
          />
        </Card>
        <Card
          className="cursor-pointer"
          title="Development"
          description="After discussing an idea dasdasdasdasdasdasdasdin detail, we conduct research, estimate possible risks and carefully think about the approach we are going to use."
          tag="Step 2"
          img="/images/misc/exp1.svg"
        >
          <RevealEffect
            animationSpeed={3}
            containerClassName="bg-purple-800/30"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2.5}
          />
          <div
            className="absolute inset-0
              [mask-image:radial-gradient(400px_at_center,white,transparent)]
              bg-black/50 dark:bg-black/90"
          />
        </Card>
        <Card
          className="cursor-pointer"
          title="Testing & Launch"
          description="After discussing an idea in detail, we conduct research, estimate possible risks and carefully think about the approach we are going to use."
          tag="Step 3"
          img="/images/misc/exp2.svg"
        >
          <RevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-900"
            colors={[
              [125, 211, 252],
              [236, 72, 153],
            ]}
          />
        </Card>
      </div>
    </section>
  )
}
