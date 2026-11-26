import { ReactNode } from 'react'
import { cn } from 'cn'

interface Props {
  className?: string,
  children: ReactNode
}

export const Tile = ({ className, children }: Props) => {
  return (
    <div
      className={cn("border border-grid-line p-6 rounded-lg bg-surface", className)}
    >
      {children}
    </div>
  )
}