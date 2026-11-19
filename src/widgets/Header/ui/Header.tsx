import Link from 'next/link'
import { Languages, Moon } from 'lucide-react'

import { Button } from '@/shared'
import { navItems } from '@/widgets/Header/model'

export const Header = () => {
  return (
    <header className='wrapper p-4 flex justify-between items-center gap-5'>
      <Link
        className="text-light font-semibold"
        href="/"
        title="Home"
      >
        Danil Yakimenko
      </Link>

      <nav>
        <ul className="flex items-center gap-6">
          {navItems.map(({ label, href }, index) => (
            <li key={index}>
              <Link
                className="hover:text-light"
                href={href}
              >{label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-2">
        <Button title="Dark theme">
          <Moon
            className="hover:text-light"
            size={20}
          />
        </Button>
        <Button title="English">
          <Languages
            className="hover:text-light"
            size={20}
          />
        </Button>
      </div>
    </header>
  )
}