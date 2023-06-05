import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="md p-4 md:w-1/2 " style={{ maxWidth: '544px' }}>
    <div
      className={`${imgSrc && 'h-full'}  overflow-hidden px-3  md:grid-cols-2 grid items-center`}
    >
      <div className="relative w-full  rounded-full overflow-hidden aspect-square">
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="left-0 top-0"
                layout="fill"
                objectFit="contain"
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="left-0 top-0"
              layout="fill"
              objectFit="contain"
            />
          ))}
      </div>
      <div className="p-6 ">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400 md:leading-5">
          {description}
        </p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-blue-500 hover:text-blue-600 dark:text-primary-500 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            <button className="px-4 py-1 text-sm text-primary-600 font-semibold rounded-full border border-primary-200 hover:text-white hover:bg-primary-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2">
              Learn more &rarr;
            </button>
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
