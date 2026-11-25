import Image from 'next/image'
import Link from 'next/link'
import { socialItems } from '@/shared'

export const Hero = () => {
  return (
    <section className="grid-bg border-b border-b-grid-line">
      <div className="py-48 wrapper flex justify-between items-center gap-5">
        <div>
          <div className="inline-flex items-center gap-2 border border-grid-line rounded-2xl px-3 py-1 bg-elevated">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-jetbrains text-xs">Open to work</span>
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] text-light sm:text-6xl">
            Hi, I&#39;m <span className="text-accent">Danil Yakimenko</span>
          </h1>
          <p className="mt-3 font-jetbrains text-lg sm:text-xl">Frontend Developer</p>
          <p className="mt-6 max-w-xl">
            I enjoy turning designs into clean, responsive, and user-friendly web interfaces.
            I&#39;m passionate about creating engaging digital experiences with modern technologies and attention to detail.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link
              className="button bg-accent hover:text-light hover:bg-accent/80"
              href="/"
            >
              Get in touch
            </Link>
            <Link
              className="button"
              href="/"
            >
              View projects
            </Link>
          </div>
          <ul className="mt-8 flex justify-center gap-4 md:justify-start">
            {socialItems.map(({ title, href, icon }, index) => (
              <li key={index}>
                <a
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border hover:bg-elevated border-grid-line transition-colors"
                  href={href}
                  title={title}
                >
                  <Image
                    src={icon}
                    width={18}
                    height={18}
                    alt={title}
                  />
                </a>
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