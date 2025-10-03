import { cn } from '@/lib/utils'

import { BackgroundGradientAnimation } from '../BackgroundGradientAnimation'
import { GridGlobe } from '../GridGlobe'
import { Paper } from '../Paper'
import { EmailAction } from './EmailAction'
import { TechStack } from './TechStack'
import { Button } from '../Button'
import Image from 'next/image'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        `grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4
        lg:gap-8 mx-auto`,
        className,
      )}
    >
      {children}
    </div>
  )
}

export interface BentoGridItemProps {
  id: string
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  titleClassName?: string
  fetchPriority?: 'high'
  img?: { src: string; className?: string }
  spareImg?: { src: string; className?: string }
  extensions?: Array<
    | 'default'
    | '3dGlobe'
    | 'backgroundGradientAnimation'
    | 'techStack'
    | 'emailContact'
    | 'contactLink'
    | 'centeredContent'
  >
}

export const BentoGridItem = ({
  id,
  className,
  title,
  titleClassName,
  description,
  fetchPriority,
  img,
  spareImg,
  extensions,
}: BentoGridItemProps) => {
  return (
    <Paper
      as="article"
      id={id}
      className={cn(
        `relative shadow-lg row-span-1 group/bento flex flex-col justify-between
        gap-4 select-none overflow-hidden`,
        className,
      )}
    >
      <div
        className={`${ extensions?.includes('centeredContent') &&
          'flex justify-center' } h-full`}
      >
        <div className="absolute size-full">
          {img && (
            <Image
              width={840}
              height={660}
              quality={90}
              fetchPriority={fetchPriority}
              loading={fetchPriority === 'high' ? 'eager' : 'lazy'}
              className={cn(img.className, 'object-cover object-center')}
              src={img.src}
              alt={id + '-image'}
            />
          )}
        </div>

        <div className={cn('absolute right-0 -bottom-5', spareImg?.className)}>
          {spareImg && (
            <img
              className={'object-cover object-center size-full'}
              src={spareImg.src}
              alt={id + '-spareImage'}
            />
          )}
        </div>

        {extensions?.includes('backgroundGradientAnimation') && (
          <BackgroundGradientAnimation containerClassName="absolute top-0 left-0 size-full" />
        )}

        <div
          className={cn(
            titleClassName,
            `relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10
            group-hover/bento:translate-x-1.5 transition duration-200
            pointer-events-none`,
          )}
        >
          <p
            className="font-sans font-light dark:text-slate-400 text-sm
              md:text-xs lg:text-base text-black/80 z-20"
          >
            {description}
          </p>
          <h3
            className="font-sans font-bold text-lg lg:text-3xl max-w-96
              group-hover/bento:text-glow transition-all ease-out duration-300
              z-20"
          >
            {title}
          </h3>

          {extensions?.includes('3dGlobe') && (
            <GridGlobe
              className="absolute -left-3.5 top-36 md:top-40 transition-all
                duration-300 group-hover/bento:translate-y-4
                group-hover/bento:scale-[118%] group-hover/bento:saturate-50"
            />
          )}

          {extensions?.includes('techStack') && <TechStack />}

          {extensions?.includes('emailContact') && <EmailAction />}

          {extensions?.includes('contactLink') && (
            <Button
              className="pointer-events-auto mx-auto bg-blue-950 mt-4"
              variant="magic"
              size="lg"
              href={'/contact'}
            >
              Send me a request
            </Button>
          )}
        </div>
      </div>
    </Paper>
  )
}
