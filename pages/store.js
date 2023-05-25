import { PageSEO } from '@/components/SEO'
import ShoppingCard from '@/components/ShoppingCard'
import artData from '@/data/products/artData'
import shirtsData from '@/data/products/shirtsData'
import siteMetadata from '@/data/siteMetadata'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div>
        <section className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              T-Shirts
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Handpainted Tees.</p>
          </div>
          <div className="container py-12">
            <div className="-m-4 flex flex-wrap grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {shirtsData.map((d) => (
                <ShoppingCard
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  color={d.color}
                  imgSrc={d.imgSrc}
                  href={d.href}
                  price={d.price}
                  sold={d.sold}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Paintings and Drawings
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Handmade Art for Sale.
            </p>
          </div>
          <div className="container py-12">
            <div className="-m-4 flex flex-wrap grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {artData.map((d) => (
                <ShoppingCard
                  key={d.title}
                  title={d.title}
                  imgSrc={d.imgSrc}
                  href={d.href}
                  price={d.price}
                  description={d.medium}
                  sold={d.sold}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
