
import { Section } from '@/shared'
import { Slider, type Project } from '@/shared'

const projects: Project[] = [
  {
    category: 'Web',
    title: '3D Gaming Chair',
    description:
      'Developed an interactive gaming chair configurator that enables users to customize chair designs and explore different options. Focused on creating an intuitive, engaging user experience that simplifies personalization and product visualization.',
    technologies: ['React', 'Three.js', 'Vercel'],
    image: '/greygods.jpg',
    demoUrl: 'https://example.com',
  },
  {
    category: 'Web',
    title: 'AnimeVibe',
    description:
      'Developed a modern anime streaming platform with a responsive interface, interactive components, and intuitive navigation. Focused on creating a comfortable browsing experience for discovering anime content.',
    technologies: ['React', 'Vite', 'SCSS'],
    image: '/greygods.jpg',
    demoUrl: 'https://danilyakimenko.github.io/anime-vibe/',
  },
  {
    category: 'Web',
    title: 'YouTube Clone',
    description:
      'Built a video-sharing platform inspired by YouTube, featuring a responsive interface, video browsing, authentication, and reusable UI components.',
    technologies: ['Next.js', 'React', 'TypeScript'],
    image: '/greygods.jpg',
    demoUrl: 'https://example.com',
  },
  {
    category: 'Web',
    title: 'Byte Store',
    description:
      'Created an e-commerce application with a modern interface, product catalog, shopping cart, and authentication. Focused on reusable components and scalable application architecture.',
    technologies: ['Next.js', 'TypeScript', 'Prisma'],
    image: '/greygods.jpg',
    demoUrl: 'https://example.com',
  },
  {
    category: 'Web',
    title: 'Next Pizza',
    description:
      'Developed an online pizza ordering application with product customization, shopping cart management, and checkout functionality.',
    technologies: ['Next.js', 'React', 'Prisma'],
    image: '/greygods.jpg',
    demoUrl: 'https://example.com',
  },
]

export const Portfolio = () => {
  return (
    <Section
      eyebrow="Portfolio"
      title="Projects by category"
      description="Explore selected open-source work and client projects, organized by the kind of problems they solve."
      id="portfolio"
    >
      <Slider projects={projects} />
    </Section>
  )
}
