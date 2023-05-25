import { getCartOpen, setCartOpen } from '@/state/navState'
import { useAppDispatch, useAppSelector } from '@/state/hooks'
import { useEffect, useState } from 'react'

export default function Modal({ children, title, showing }) {
  const [mounted, setMounted] = useState(false)
  const dispatch = useAppDispatch()
  const cartOpen = useAppSelector(getCartOpen)

  return (
    <div
      className={` absolute right-1 min-w-[50%] mr-[-4px] z-50 text-right border-t-2 border-black overflow-hidden `}
    >
      <div
        className={`dark:bg-black/[0.3] bg-white duration-500 p-5 transition-transform ease-in-out ${
          !cartOpen && 'translate-y-[-100%]'
        }`}
      >
        <div className="flex items-center justify-end">
          <div className="cursor-pointer order-2" onClick={() => dispatch(setCartOpen(!cartOpen))}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1.3em"
              width="1.3em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
            </svg>
          </div>

          <h1 className="text-xl font-bold tracking-tighter mr-3">{title}</h1>
        </div>
        <div className="divide-y divide-gray-600 dark:divide-gray-200">{children}</div>
      </div>
    </div>
  )
}
