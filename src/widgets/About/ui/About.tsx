import { Section, Tile } from '@/shared'
import { aboutItems } from '@/widgets/About'

export const About = () => {
  return (
    <Section
      eyebrow="About"
      title="A bit about me"
      description="Web Interfaces, Modern Technologies and Clean Code"
      id="about"
    >
      <div className="grid grid-cols-2 items-center gap-10">
        <div className="space-y-4 text-base">
          <p>I&#39;m a Junior Frontend Developer focused on building modern web interfaces with attention to detail, usability, and responsive design.</p>
          <p>I work with HTML, CSS, JavaScript, and React, and I&#39;m continuously expanding my knowledge of modern frontend technologies, including Next.js and TypeScript.</p>
          <p>I enjoy transforming designs into functional web experiences, exploring new technologies, and improving my development skills through personal projects.</p>
          <p>My goal is to write clean, maintainable code and create interfaces that look great and work smoothly across different devices.</p>
        </div>
        <Tile>
          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 items-start">
            {aboutItems.map(({ label, value, href }, index) => {
              return (
                <div className="grid gap-1" key={index}>
                  <dt className="font-jetbrains text-xs uppercase tracking-wide">
                    {label}
                  </dt>
                  <dd className="font-medium text-light">
                    {href
                      ? <address className="not-italic">
                          <a href={href}>{value}</a>
                        </address>
                      : value}
                  </dd>
                </div>
              )
            })}
          </dl>
        </Tile>
      </div>
    </Section>
  )
}