import { Section, Tile } from '@/shared'

const aboutItems = [
  {
    label: 'Email',
    value: 'taroyamada5880@gmail.com',
    href: 'mailto:taroyamada5880@gmail.com',
  },

  {
    label: 'Phone',
    value: '+810375701108',
    href: 'tel:+810375701108'
  },

  {
    label: 'Location',
    value: 'Tokyo, Japan',
  },

  {
    label: 'Degree',
    value: 'B.Sc. (Hons.) in Electronics & Communication Engineering'
  },

  {
    label: 'Freelance',
    value: 'Available'
  },

  {
    label: 'Languages',
    value: 'Japanese, English, Spanish'
  },

]

export const About = () => {
  return (
    <Section
      eyebrow="About"
      title="A bit about me"
      description="Web, Mobile, AI, Full Stack, System Architecture and End to End Product Development"
    >
      <div className="grid grid-cols-2 items-center">
        <div>
          <p>I&#39;m a Senior Full Stack Engineer with 9+ years of experience specializing in WEB Development, Mobile App Development, and AI Engineering, with expertise in building scalable, high-performance applications from scratch.</p>
          <p>My technical skills include React, Next.js, JavaScript, TypeScript, Node.js, Python, ReactNative, FastAPI, Flask, AWS, Docker, Kubernetes, and AI integration.</p>
          <p>I&#39;m passionate about building innovative products, collaborating with ambitious founders, exploring startup opportunities, and turning great ideas into successful businesses!</p>
        </div>
        <Tile>
          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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