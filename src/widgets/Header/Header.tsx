import Link from 'next/link'
import Image from 'next/image'
import { Languages, Moon } from 'lucide-react'
import { cn } from 'cn'
import { Button } from '@/shared'

interface Props {
  className?: string,
}

const navItems = [
  {
    label: 'About',
    href: '/'
  },
  {
    label: 'Skills',
    href: '/'
  },
  {
    label: 'Resume',
    href: '/'
  },
  {
    label: 'Portfolio',
    href: '/'
  },
  {
    label: 'Services',
    href: '/'
  },
  {
    label: 'Contact',
    href: '/'
  },
]

export const Header = ({ className }: Props) => {
  return (
    <header className={cn('wrapper p-5 flex justify-between items-center gap-5 ', className)}>
      <Link
        className="text-light"
        href="/"
      >
        Danil Yakimenko
      </Link>

      <nav>
        <ul className="flex items-center gap-6">
          {navItems.map(({ label, href }, index) => (
            <li key={index}>
              <Link
                className=""
                href={href}
              >{label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-2">
        <Button>
          <Moon size={20} />
        </Button>
        <Button>
          <Languages size={20} />
        </Button>
      </div>
    </header>
  )
}