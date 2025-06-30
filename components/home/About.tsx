import { aboutItems } from '@/data/about'

import { BentoGrid, BentoGridItem } from '../ui'

export const About = () => {
  return (
    <section id="about" className="scroll-m-36">
      <BentoGrid>
        {aboutItems.map(item => (
          <BentoGridItem key={item.id} {...item} />
        ))}
      </BentoGrid>
    </section>
  )
}
