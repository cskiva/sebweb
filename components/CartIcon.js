import { getCartOpen, setCartOpen } from '@/state/navState'
import { useAppDispatch, useAppSelector } from '@/state/hooks'
import { useEffect, useState } from 'react'

const CartIcon = () => {
  const [mounted, setMounted] = useState(false)
  const dispatch = useAppDispatch()
  const cartOpen = useAppSelector(getCartOpen)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"
      onClick={() => dispatch(setCartOpen(!cartOpen))}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-gray-900 dark:text-gray-100"
      >
        {mounted && cartOpen ? (
          <path d="M12 2a7 7 0 0 1 7 7h1.074a1 1 0 0 1 .997.923l.846 11a1 1 0 0 1-.92 1.074L20.92 22H3.08a1 1 0 0 1-1-1l.003-.077.846-11A1 1 0 0 1 3.926 9H5a7 7 0 0 1 7-7zm2 11h-4v2h4v-2zm-2-9a5 5 0 0 0-4.995 4.783L7 9h10a5 5 0 0 0-4.783-4.995L12 4z"></path>
        ) : (
          <path
            fillRule="nonzero"
            d="M12 2a7 7 0 0 1 7 7h1.074a1 1 0 0 1 .997.923l.846 11a1 1 0 0 1-.92 1.074L20.92 22H3.08a1 1 0 0 1-1-1l.003-.077.846-11A1 1 0 0 1 3.926 9H5a7 7 0 0 1 7-7zm7.147 9H4.852l-.693 9H19.84l-.693-9zM14 13v2h-4v-2h4zm-2-9a5 5 0 0 0-4.995 4.783L7 9h10a5 5 0 0 0-4.783-4.995L12 4z"
          ></path>
        )}
      </svg>
    </button>
  )
}

export default CartIcon
