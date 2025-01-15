import { cva, VariantProps } from 'cva'
import { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/utils'

const buttonVariants = cva(
  `relative flex items-center justify-center overflow-hidden gap-2 cursor-pointer
        focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1
        focus:ring-offset-slate-50 transition-all group`,
  {
    variants: {
      variant: {
        default: 'bg-white text-black hover:bg-white/90',
        magic: '!rounded-xl !p-px w-fit text-white',
      },
      size: {
        default: 'h-10 rounded-lg px-4 py-2',
        sm: 'h-9 rounded-lg px-2',
        lg: 'h-11 rounded-xl px-4',
        xl: 'h-14 text-lg rounded-xl px-12',
        link: 'h-fit p-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    HTMLAttributes<HTMLElement> {
  href?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

export const Button = (props: ButtonProps) => {
  const { variant, size, className } = props
  const Tag = 'href' in props ? 'a' : 'button'

  return (
    <Tag
      {...props}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {renderContent(props)}
    </Tag>
  )
}

const renderContent = ({
  variant,
  iconLeft,
  iconRight,
  children,
}: ButtonProps) => {
  if (variant === 'magic') {
    return (
      <>
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
            bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center
            justify-center rounded-xl bg-slate-950 px-6 backdrop-blur-3xl
            group-hover:scale-[98%] transition-all gap-2"
        >
          {iconLeft}
          {children}
          {iconRight}
        </span>
      </>
    )
  }

  return (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  )
}
