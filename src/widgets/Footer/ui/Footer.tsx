import { socialItems } from '@/shared'
import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="py-6">
      <div className="wrapper flex items-center justify-between">
        <p className="text-sm">© 2026 Taro Yamada. All rights reserved.</p>
        <ul className="flex justify-center gap-4 md:justify-start">
          {socialItems.map(({ title, href, icon }, index) => (
            <li key={index}>
              <Link
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border  text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
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
    </footer>
  )
}