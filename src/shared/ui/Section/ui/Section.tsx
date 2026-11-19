import { ReactNode } from 'react'

interface Props {
  eyebrow: string,
  title: string,
  description: string,
  children: ReactNode
}

export const Section = ({ eyebrow, title, description, children }: Props) => {
  const titleId = `${title}-title`

  return (
    <section className="b" aria-labelledby={titleId}>
      <div>
        <p className="font-jetbrains uppercase text-accent text-xs font-medium">{eyebrow}</p>
        <h2 className="mt-3 text-2xl font-semibold text-light sm:text-3xl" id={titleId}>{title}</h2>
        <p className="mt-3">{description}</p>
      </div>
      <div>
        {children}
      </div>
    </section>
  )
}