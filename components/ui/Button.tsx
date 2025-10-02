import { cva, VariantProps } from 'cva'
import { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  `relative flex items-center justify-center overflow-hidden gap-2 cursor-pointer
        focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1
        focus:ring-offset-slate-50 transition-all group disabled:pointer-events-none disabled:opacity-80 disabled:text-opacity-80`,
  {
    variants: {
      variant: {
        default: 'bg-white text-black hover:bg-white/90',
        secondary:
          'bg-gray-400/5 saturate-50 hover:brightness-110 backdrop-blur-xl border border-white/10',
        magic: '!rounded-xl !p-px disabled:!p-0 w-fit text-white',
        link: 'underline-offset-4 text-purple hover:text-glow hover:underline',
        ghost:
          'text-black dark:text-white hover:bg-gradient-to-r from-slate-300/[0.07] to-slate-500/[0.07]',
        icon: 'rounded-full backdrop-blur-lg saturate-[1.8] border border-white/20 aspect-square hover:saturate-75',
      },
      size: {
        default: 'h-10 rounded-lg px-4 py-3',
        sm: 'h-9 text-sm rounded-lg px-4',
        lg: 'h-11 rounded-xl px-6',
        xl: 'h-14 text-lg rounded-xl px-12',
        link: 'h-fit px-1',
        icon: 'size-11 px-0 py-0',
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
    HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string
  disabled?: boolean
}

export const Button = (props: ButtonProps) => {
  const { variant, size, className } = props
  const Tag = 'href' in props ? 'a' : 'button'

  return (
    <Tag
      {...props}
      type="button"
      className={cn(buttonVariants({ variant, size }), className)}
    >
      <Content {...props} />
    </Tag>
  )
}

const Content = ({ variant, children }: ButtonProps) => {
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
            group-hover:scale-[98%] active:rotate-1 transition-all gap-2"
        >
          {children}
        </span>
      </>
    )
  }

  return <>{children}</>
}
