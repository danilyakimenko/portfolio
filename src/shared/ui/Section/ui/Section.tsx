import { ReactNode } from 'react'

interface Props {
  eyebrow: string,
  title: string,
  description: string,
  children: ReactNode
}

export const Section = ({ eyebrow, title, description, children }: Props) => {
  const titleId = `${eyebrow.toLowerCase()}-title`

  return (
    <section className="py-20 border-b border-b-grid-line" aria-labelledby={titleId}>
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