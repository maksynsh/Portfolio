import { IoArrowForward } from 'react-icons/io5'

import { techStackPartial } from '@/data/tech-stack'

export const TechStack = () => (
  <>
    <div
      className="absolute left-5 lg:left-10 bottom-6 flex items-center gap-1
        opacity-0 group-hover/bento:opacity-100 z-30 transition-all uppercase
        text-sm"
    >
      <IoArrowForward /> See full list
    </div>

    <div
      className="flex gap-3 lg:gap-2 w-fit absolute -right-3 lg:-right-2
        group-hover/bento:blur-sm transition-all"
    >
      <div className="flex flex-col gap-4 lg:gap-2">
        {techStackPartial.left.map((tech, i) => (
          <span
            key={i}
            className="px-3 text-xs h-8 lg:h-10 flex items-center justify-center
              lg:text-base opacity-50 xl:opacity-90 rounded-lg text-center
              bg-[#10132E]"
          >
            {tech.title}
          </span>
        ))}
        <span className="px-3 h-8 lg:h-10 rounded-lg text-center bg-[#10132E]"></span>
      </div>
      <div className="flex flex-col gap-5 lg:gap-2">
        <span className="px-3 h-8 lg:h-10 rounded-lg text-center bg-[#10132E]"></span>
        {techStackPartial.right.map((tech, i) => (
          <span
            key={i}
            className="px-3 text-xs h-8 lg:h-10 flex items-center justify-center
              lg:text-base opacity-50 xl:opacity-90 rounded-lg bg-[#10132E]"
          >
            {tech.title}
          </span>
        ))}
      </div>
    </div>
  </>
)
