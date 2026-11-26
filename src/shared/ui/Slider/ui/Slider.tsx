'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

export interface Project {
  category: string
  title: string
  description: string
  technologies: string[]
  image: string
  demoUrl: string
}

interface Props {
  projects: Project[]
}

export const Slider = ({ projects }: Props) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  return (
    <div className="relative w-full overflow-hidden px-10">
      <Swiper
        modules={[Pagination]}
        slidesPerView="auto"
        centeredSlides
        spaceBetween={24}
        loop
        pagination={{
          clickable: true,
        }}
        onSwiper={setSwiper}
        className="overflow-visible! pb-9"
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.title}
            className="
              !h-auto w-[min(887px,calc(100vw-80px))]
              scale-[0.96] opacity-35
              transition-all duration-300
              [&.swiper-slide-active]:scale-100
              [&.swiper-slide-active]:opacity-100
            "
          >
            <div className="flex flex-col gap-5">
              <span className="text-center text-sm font-semibold text-white">
                {project.category}
              </span>

              <article
                className="
                  grid min-h-95 grid-cols-1
                  overflow-hidden rounded-xl border border-[#25262d]
                  bg-[#111216]
                  md:grid-cols-[1.2fr_0.88fr]
                "
              >
                {/* Project information */}
                <div className="flex flex-col items-start p-6 md:p-8">
                  <h3 className="mb-4 text-2xl font-bold text-zinc-100">
                    {project.title}
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  <h4 className="mb-3 text-sm font-semibold text-zinc-100">
                    Technologies
                  </h4>

                  <ul className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="
                          rounded-full border border-[#30313a]
                          px-3 py-1.5 text-xs text-zinc-400
                        "
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-auto rounded-lg bg-indigo-400
                      px-4 py-2.5 text-sm font-semibold text-white
                      transition-colors hover:bg-indigo-500
                    "
                  >
                    Live demo ↗
                  </Link>
                </div>

                {/* Project preview */}
                <div
                  className="
                    relative min-h-60 overflow-hidden
                    border-t border-[#25262d] bg-[#0d0e11]
                    md:min-h-95 md:border-l md:border-t-0

                  "
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </article>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <button
        type="button"
        aria-label="Previous project"
        onClick={() => swiper?.slidePrev()}
        className="
  absolute left-0 top-1/2 z-10
  flex size-8 -translate-y-1/2 items-center justify-center
  rounded-full border border-[#30313a]
  bg-[#111216] text-2xl text-white
  transition-colors hover:bg-[#252630]
"
      >
        ‹
      </button>

      <button
        type="button"
        aria-label="Next project"
        onClick={() => swiper?.slideNext()}
        className="
  absolute right-0 top-1/2 z-10
  flex size-8 -translate-y-1/2 items-center justify-center
  rounded-full border border-[#30313a]
  bg-[#111216] text-2xl text-white
  transition-colors hover:bg-[#252630]"
      >
        ›
      </button>
    </div>
  )
}
