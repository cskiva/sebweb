import { FaMusic, FaNodeJs, FaPaintBrush, FaReact } from 'react-icons/fa'

import { AiOutlineCode } from 'react-icons/ai'
import { BsFillEasel2Fill } from 'react-icons/bs'
import Card from '@/components/Card'
import CarouselGeneric from '@/components/CarouselGeneric'
import { DiMongodb } from 'react-icons/di'
import { GiWoodCabin } from 'react-icons/gi'
import { PageSEO } from '@/components/SEO'
import projectsData from '@/data/projectsData'
import siteMetadata from '@/data/siteMetadata'

export default function Projects() {
  const TextSlide = ({ title, text }) => (
    <div
      key={1}
      className="bg-white/[0.5] p-5 rounded-md text-gray-900 text-center flex items-center justify-center flex-col"
    >
      <h2 className="font-bold md:text-3xl leading-14">{title}</h2>
      <p className="md:text-xl max-w-[50%]">{text}</p>
    </div>
  )
  const devItems = [
    {
      item: (
        <TextSlide
          key={1}
          title="React / NextJs / Express"
          text="Frontend, CSS, HTML, API, Functions, JSON, Redux"
        />
      ),
      icon: <FaReact />,
    },
    {
      item: (
        <TextSlide
          key={1}
          title="MongoDB/Firebase"
          text="Database, Collections, CMS Creation, Dynamic Data"
        />
      ),
      icon: <DiMongodb />,
    },
    {
      item: (
        <TextSlide
          key={1}
          title="React/ NextJs / Express"
          text="Frontend, CSS, HTML, API, Functions, JSON, Redux"
        />
      ),
      icon: <FaNodeJs />,
    },
    {
      item: (
        <TextSlide
          key={1}
          title="3D/Interfaces/Design"
          text="Sketch, Illustrator, Vector and 3D Mockup, Traditional Drawing"
        />
      ),
      icon: <AiOutlineCode />,
    },
  ]

  const artItems = [
    {
      item: (
        <TextSlide
          key={1}
          title="Painting/Murals"
          text="Oils, Acrylics, POSCA, Realism, Designs, Copies and Originals"
        />
      ),
      icon: <FaPaintBrush />,
    },
    {
      item: (
        <TextSlide
          key={1}
          title="Draughting/Drawings"
          text="Portraits, Nib-pen, Caligraphy, Realism, Architectural"
        />
      ),
      icon: <BsFillEasel2Fill />,
    },
    {
      item: (
        <TextSlide
          key={1}
          title="Music/Production"
          text="DAW Composition, Live-Recording, Soundtrack, Interfaces, Vocals, Peformance"
        />
      ),
      icon: <FaMusic />,
    },
    {
      item: (
        <TextSlide
          key={1}
          title="Offgrid"
          text="Farming, Carpentry, Sculpture, Mechanics, Building"
        />
      ),
      icon: <GiWoodCabin />,
    },
  ]

  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />

      <div className="divide-y divide-gray-200 dark:divide-gray-700 mx-auto max-w-3xl sm:px-6 xl:max-w-5xl">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Code
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Applications, Websites, Designs, Interfaces.
          </p>
        </div>
        <div className="mb-8 flex  w-full items-center justify-between rounded-md bg-gradient-to-t from-cyan-500 to-blue-500">
          <CarouselGeneric items={devItems} title={'Full Stack Developer'} arrows />
        </div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Art
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Gifts, Meditations, Challenges and Decorations.
          </p>
        </div>
        <div className="mb-8 flex  w-full items-center justify-around rounded-md bg-gradient-to-t from-yellow-500 to-orange-500 flex-col">
          <CarouselGeneric items={artItems} title={'Full Stack Artist'} arrows />
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
