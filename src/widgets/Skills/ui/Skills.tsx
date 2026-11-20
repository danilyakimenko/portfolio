import { Section, Tile } from '@/shared'
import { TechnologyBadge } from '@/shared/ui/TechnologyBadge'

const skillItems = [
  {
    title: 'Frontend',
    technologies: [
      'React',
      'Next.js',
      'Angular',
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'WordPress',
      'Shopify',
    ]
  },

  {
    title: 'Backend',
    technologies: [
      'React',
      'Next.js',
      'Angular',
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'WordPress',
      'Shopify',
    ]
  },

  {
    title: 'AI & Automation',
    technologies: [
      'React',
      'Next.js',
      'Angular',
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'WordPress',
      'Shopify',
    ]
  },

  {
    title: 'Databases',
    technologies: [
      'React',
      'Next.js',
      'Angular',
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'WordPress',
      'Shopify',
    ]
  },

  {
    title: 'Mobile Development',
    technologies: [
      'React',
      'Next.js',
      'Angular',
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'WordPress',
      'Shopify',
    ]
  },

  {
    title: 'Cloud & DevOps',
    technologies: [
      'React',
      'Next.js',
      'Angular',
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'WordPress',
      'Shopify',
    ]
  },
]

export const Skills = () => {
  return (
    <Section
      eyebrow="Skills"
      title="What I work with"
      description="Full Stack toolkit for shipping complete products."
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