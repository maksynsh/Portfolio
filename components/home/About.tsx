import { aboutItems } from '@/data/home'

import { BentoGrid, BentoGridItem } from '../ui'

export const About = () => {
  return (
    <section id="about">
      <BentoGrid>
        {aboutItems.map(item => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </section>
  )
}
