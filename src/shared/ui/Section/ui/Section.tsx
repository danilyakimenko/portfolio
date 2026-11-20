import { ReactNode } from 'react'
import { cn } from 'cn'

interface Props {
  eyebrow: string,
  title: string,
  description: string,
  isLightBackground?: boolean,
  children: ReactNode
}

export const Section = ({ eyebrow, title, description, isLightBackground,  children }: Props) => {
  const titleId = `${eyebrow.toLowerCase()}-title`

  return (
    <section className={cn("py-20 border-b border-b-grid-line", {
      'bg-elevated': isLightBackground
    })} aria-labelledby={titleId}>
     <div className="wrapper grid gap-12">
       <div className="grid gap-3">
         <p className="font-jetbrains uppercase text-accent text-xs font-medium">{eyebrow}</p>
         <h2 className="text-2xl font-semibold text-light sm:text-3xl" id={titleId}>{title}</h2>
         <p>{description}</p>
       </div>
       <div>
         {children}
       </div>
     </div>
    </section>
  )
}