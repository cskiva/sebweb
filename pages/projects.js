import { FaMusic, FaNodeJs, FaPaintBrush, FaReact } from 'react-icons/fa'

import { AiOutlineCode } from 'react-icons/ai'
import { BsFillEasel2Fill } from 'react-icons/bs'
import Card from '@/components/Card'
import { DiMongodb } from 'react-icons/di'
import { GiWoodCabin } from 'react-icons/gi'
import { PageSEO } from '@/components/SEO'
import projectsData from '@/data/projectsData'
import siteMetadata from '@/data/siteMetadata'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Code
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {/* Showcase your projects with a hero image (16 x 9) */}At the Computer.
          </p>
        </div>
        <div className="mb-8 flex aspect-video w-full items-center justify-around rounded-md bg-gradient-to-t from-cyan-500 to-blue-500 flex-col">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Full Stack Developer
          </h1>
          <div className="bg-white/[0.5] p-5 rounded-md text-gray-900 text-center min-h-[30%] md:max-w-[33%] min-w-[33%] flex items-center justify-center flex-col">
            <h2 className="font-bold">React/NextJs/Express</h2>
            <p>Frontend, CSS, HTML, API, Functions, JSON, Redux</p>
          </div>
          <div className="flex gap-5 text-gray-900 text-7xl">
            <FaReact />
            <FaNodeJs />
            <DiMongodb />
            <AiOutlineCode />
          </div>
        </div>

        <div className="mb-8 flex aspect-video w-full items-center justify-around rounded-md bg-gradient-to-t from-yellow-500 to-orange-500 flex-col">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Full Stack Artist
          </h1>
          <div className="bg-white/[0.5] p-5 rounded-md text-gray-900 text-center min-h-[30%] md:max-w-[33%] min-w-[33%] flex items-center justify-center flex-col">
            <h2 className="font-bold">Painting</h2>
            <p>
              Oil Painting, Acrylics, POSCA, Murals, Renaissance, Pop, Surrealism, Cosmic, Copies
              and Originals.
            </p>
          </div>
          <div className="flex gap-5 text-gray-900 text-7xl">
            <FaPaintBrush />
            <GiWoodCabin />
            <BsFillEasel2Fill />
            <FaMusic />
          </div>
        </div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 border-none">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {/* Showcase your projects with a hero image (16 x 9) */}A Portfolio of UX Design and
            Artwork.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
