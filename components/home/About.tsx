import { aboutItems } from '@/data/about'

import { BentoGrid, BentoGridItem } from '../ui'

export const About = () => {
  return (
    <section id="about">
      <BentoGrid>
        {aboutItems.map(item => (
          <BentoGridItem key={item.id} {...item} />
        ))}
      </BentoGrid>
    </section>
  )
}
