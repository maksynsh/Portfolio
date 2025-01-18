import { techStack } from '@/data/tech-stack'

export const TechStack = () => (
  <div className="flex gap-3 lg:gap-2 w-fit absolute -right-3 lg:-right-2">
    <div className="flex flex-col gap-4 lg:gap-2">
      {techStack.left.map((item, i) => (
        <span
          key={i}
          className="px-3 text-xs h-8 lg:h-10 flex items-center justify-center
            lg:text-base opacity-50 xl:opacity-100 rounded-lg text-center
            bg-[#10132E]"
        >
          {item}
        </span>
      ))}
      <span className="px-3 h-8 lg:h-10 rounded-lg text-center bg-[#10132E]"></span>
    </div>
    <div className="flex flex-col gap-5 lg:gap-2">
      <span className="px-3 h-8 lg:h-10 rounded-lg text-center bg-[#10132E]"></span>
      {techStack.right.map((item, i) => (
        <span
          key={i}
          className="px-3 text-xs h-8 lg:h-10 flex items-center justify-center
            lg:text-base opacity-50 xl:opacity-100 rounded-lg bg-[#10132E]"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
)
