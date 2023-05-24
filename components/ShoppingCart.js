import { getCartOpen, setCartOpen } from '@/state/navState'
import { useAppDispatch, useAppSelector } from '@/state/hooks'
import { useEffect, useState } from 'react'

import Modal from './Modal'

export default function ShoppingCart() {
  const [mounted, setMounted] = useState(false)
  const dispatch = useAppDispatch()
  const cartOpen = useAppSelector(getCartOpen)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  const items = [
    { name: 'item1', price: 345 },
    { name: 'item 2', price: 678 },
  ]
  return (
    <Modal title="ShoppingCart" showing={cartOpen}>
      <h1 className="text-lg">Items</h1>
      <div id="items-render">
        {items.map((item) => {
          return (
            <section key={item.name} className="flex gap-3 my-2">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </section>
          )
        })}
      </div>
      <button
        className={`w-full
		 rounded-md 
		 bg-blue-500
		  py-2
		   mt-4
		    px-4 
			font-medium
			 text-white
			  sm:py-0
			   focus:outline-none
			    focus:ring-2
				 focus:ring-primary-600 
				 focus:ring-offset-2
				  dark:ring-offset-black 
				  min-h-[50px]`}
      >
        Checkout
      </button>
    </Modal>
  )
}
