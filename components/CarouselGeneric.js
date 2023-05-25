import { useState } from 'react'

export default function CarouselGeneric({ title, items, arrows }) {
  const [position, setPosition] = useState(1)

  function nextSlide(e) {
    if (position < items.length) {
      setPosition(position + 1)
    }
    console.log('next')
  }

  function prevSlide(e) {
    if (position > 1) {
      setPosition(position - 1)
    }
    console.log('next')
  }

  function goToSlide(i) {
    console.log('prev')
    setPosition(i)
  }

  return (
    <div className=" relative w-full flex flex-1 items-end">
      <div className="aspect-ratio[4/3] block h-8 flex-1 order-2 h-full w-full flex flex-col">
        <div className="flex-1">
          <div className="w-full h-full relative overflow-hidden my-8 md:h-72 h-64">
            {items && items.length > 0 ? (
              items.map((item, i) => {
                return (
                  <div
                    className={`absolute block w-full ${
                      i + 1 === position
                        ? '-translate-x-1/2'
                        : i + 1 > position
                        ? '-translate-x-[-200%]'
                        : '-translate-x-[200%]'
                    } -translate-y-1/2 top-1/2 left-1/2 h-full w-full flex items-center justify-center transition-transform duration-1000`}
                    key={i}
                  >
                    {item.item}
                  </div>
                )
              })
            ) : (
              <p>empty</p>
            )}
          </div>
        </div>
        <div className="block w-full flex justify-center items-center gap-6 text-gray-900 md:text-6xl text-4xl my-6">
          {items && items.length > 0 ? (
            items.map((item, i) => {
              return item.icon ? (
                <div
                  key={i}
                  onClick={() => goToSlide(i + 1)}
                  className={`${
                    i + 1 === position ? 'opacity-[0.8]' : 'opacity-[0.5]'
                  } hover:opacity-[1] cursor-pointer`}
                >
                  {item.icon}
                </div>
              ) : (
                <div
                  key={i}
                  onClick={() => goToSlide(i + 1)}
                  className={`rounded-full h-4 w-4 bg-white ${
                    i + 1 === position ? 'opacity-[0.8]' : 'opacity-[0.5]'
                  } hover:opacity-[1] cursor-pointer`}
                />
              )
            })
          ) : (
            <p>empty</p>
          )}
        </div>
      </div>

      {arrows && (
        <button
          type="button"
          className={`group z-30 flex items-center justify-center h-full px-4 my-6 ${
            position !== 1 && 'cursor-pointer'
          } focus:outline-none order-1`}
          dataCarouselPrev
          onClick={() => prevSlide()}
          disabled={position == 1}
        >
          <span
            className={`inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 ${
              position !== 1 &&
              'group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'
            }`}
          >
            <svg
              ariaHidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
      )}
      {arrows && (
        <button
          type="button"
          className="group top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none order-3  my-6"
          dataCarouselNext
          onClick={() => nextSlide()}
          disabled={position === items.length}
        >
          <span
            className={`inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 ${
              position < items.length &&
              'group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'
            }`}
          >
            <svg
              ariaHidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      )}
    </div>
  )
}
