import { cn } from 'cn'
import { ReactNode } from 'react'

interface Props {
  className?: string,
  children?: ReactNode
}

export const Button = ({ className, children }: Props) => {
  return (
    <button className={cn("border rounded-full border-gray-800 p-2", className)}>
      {children}
    </button>
  )
}