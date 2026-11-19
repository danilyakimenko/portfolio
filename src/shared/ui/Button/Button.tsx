import { cn } from 'cn'
import { ReactNode } from 'react'

interface Props {
  className?: string,
  children?: ReactNode
  title?: string
}

export const Button = ({ className, title, children }: Props) => {
  return (
    <button className={cn("border rounded-full border-gray-800 p-2 hover:bg-elevated", className)} title={title}>
      {children}
    </button>
  )
}