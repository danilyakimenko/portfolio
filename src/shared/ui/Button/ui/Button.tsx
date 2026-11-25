import { cn } from 'cn'
import React, { ReactNode } from 'react'

interface Props {
  className?: string,
  children?: ReactNode
  type?: React.ComponentProps<'button'>['type']
  title?: string
}

export const Button = ({ className, title, type = 'button', children }: Props) => {
  return (
    <button className={cn("border rounded-full border-gray-800 p-2 hover:bg-elevated", className)} title={title} type={type}>
      {children}
    </button>
  )
}