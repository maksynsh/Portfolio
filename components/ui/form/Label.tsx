import * as React from 'react'

import { cn } from '@/lib/utils'

export const Label = ({
  className,
  required,
  ...props
}: React.ComponentProps<'label'> & { required?: boolean }) => (
  <label
    className={cn(
      `text-sm font-medium text-black dark:text-white leading-none
      peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,
      className,
    )}
    {...props}
  >
    {props.children} {required && <span className="text-red-700">*</span>}
  </label>
)
