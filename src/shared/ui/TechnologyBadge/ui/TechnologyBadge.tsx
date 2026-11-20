interface Props {
  children: string
}

export const TechnologyBadge = ({ children }: Props) => {
  return (
    <span className="inline-flex items-center rounded-md border border-grid-line
     bg-elevated px-2.5 py-1 font-jetbrains
      text-xs">
      {children}
    </span>
  )
}