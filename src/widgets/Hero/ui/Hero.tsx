import Image from 'next/image'
import Link from 'next/link'
import { socialItems } from '@/shared'

export const Hero = () => {
  return (
    <section className="grid-bg border-b border-b-grid-line">
      <div className="py-24 wrapper flex justify-between items-center gap-5">
        <div>
          <div className="inline-flex items-center gap-2 border-muted rounded-2xl px-3 py-1 bg-elevated">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-jetbrains text-xs">Open to work</span>
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] text-light sm:text-6xl">Hi, I&#39;m <span className="text-accent">Danil Yakimenko</span>
          </h1>
          <p className="mt-3 font-jetbrains text-lg sm:text-xl">Frontend Developer</p>
          <p className="mt-6 max-w-xl">I’m a Frontend Developer specializing in AI, Blockchain, Web, and Mobile development, with deep expertise as a Security Researcher focused on Reverse Engineering and Ethical Hacking.</p>
          <div className="mt-8 flex items-center gap-4">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium
               focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-accent
                border text-light hover:border-accent hover:text-accent bg-linear-gradient-accent"
              href="/"
            >Get in touch</Link>
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium
               focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-accent
                border text-light hover:border-accent hover:text-accent"
              href="/"
            >View projects</Link>
          </div>
          <ul className="mt-8 flex justify-center gap-4 md:justify-start">
            {socialItems.map(({ title, href, icon }, index) => (
              <li key={index}>
                <Link
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  href={href}
                  title={title}
                >
                  <Image
                    src={icon}
                    width={18}
                    height={18}
                    alt={title}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="surface-panel h-52 w-52 rounded-2xl object-cover sm:h-64 sm:w-64 md:h-72 md:w-72"
          src="/greygods.jpg"
          width={280}
          height={280}
          alt=""
        />
      </div>
    </section>
  )
}