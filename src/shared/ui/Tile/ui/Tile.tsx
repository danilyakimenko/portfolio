import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Tile = ({ children }: Props) => {
  return (
    <div
      className="border border-grid-line p-6 rounded-lg bg-surface"
    >
      {children}
    </div>
  )
}