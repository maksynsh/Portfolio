import { APPROACH_STEPS } from '@/lib/data/approach'

import { Card, RevealEffect } from '../ui'

export const Approach = () => {
  return (
    <section id="approach" className="scroll-m-6 py-20 flex flex-col gap-10">
      <h2
        className="font-semibold tracking-wide text-center text-4xl md:text-5xl
          max-w-md md:max-w-xl mx-auto"
      >
        My <span className="text-purple">approach</span>
      </h2>

      <div
        className="py-12 flex flex-col lg:flex-row items-center justify-center
          w-full gap-6 md:gap-12 mx-auto px-8"
      >
        {APPROACH_STEPS.map(
          (
            {
              title,
              description,
              imageUrl,
              containerClassName,
              animationSpeed,
              colors,
              dotSize,
            },
            i,
          ) => (
            <Card
              key={title + description}
              className="cursor-pointer"
              title={title}
              description={description}
              tag={`Step ${i + 1}`}
              img={imageUrl}
            >
              <RevealEffect
                animationSpeed={animationSpeed}
                containerClassName={containerClassName}
                colors={colors}
                dotSize={dotSize}
              />
            </Card>
          ),
        )}
      </div>
    </section>
  )
}
