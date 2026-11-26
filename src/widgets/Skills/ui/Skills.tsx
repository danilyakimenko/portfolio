import { Section, Tile } from '@/shared'
import { TechnologyBadge } from '@/shared/ui/TechnologyBadge'
import { skillItems } from '@/widgets/Skills'

export const Skills = () => {
  return (
    <Section
      eyebrow="Skills"
      title="What I work with"
      description="Full Stack toolkit for shipping complete products."
      id="skills"
      isLightBackground
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillItems.map(({ title, technologies}, index) => (
          <li key={index}>
            <Tile>
              <h3 className="text-base font-semibold text-light">{title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {technologies.map((technology, index) => (
                  <li key={index}>
                    <TechnologyBadge>{technology}</TechnologyBadge>
                  </li>
                ))}
              </ul>
            </Tile>
          </li>
        ))}
      </ul>
    </Section>
  )
}