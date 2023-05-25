import { getCartOpen, setCartOpen } from '@/state/navState'
import { useAppDispatch, useAppSelector } from '@/state/hooks'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Modal from './Modal'

export default function ShoppingCart() {
  const [mounted, setMounted] = useState(false)
  const dispatch = useAppDispatch()
  const cartOpen = useAppSelector(getCartOpen)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  const items = [
    {
      name: 'Phi Tre Jungle 1',
      price: 34500,
      imgSrc: '/static/images/store/phitre/Jungle_1_L_Front.jpg',
    },
    {
      name: 'Phi Tre Jungle 2',
      price: 6700,
      imgSrc: '/static/images/store/phitre/Jungle_1_L_Front.jpg',
    },
  ]

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <Modal title="Shopping Cart" showing={cartOpen}>
      <div id="items-render" className="mb-3">
        {items.map((item) => {
          return (
            <section key={item.name} className="flex gap-3 my-4 items-center">
              <Image
                src={item.imgSrc}
                width={57}
                height={57}
                className="rounded-full overflow-hidden"
                alt="..."
              />
              <p className="flex-1 text-left text-lg pl-2 font-bold tracking-tight">{item.name}</p>
              <p className="font-medium text-xl tracking-normal">${item.price / 100}</p>
            </section>
          )
        })}
      </div>
      <div className="pt-3">Total: ${totalPrice / 100}</div>
      <button
        className={`w-full
		 rounded-md 
		 bg-primary-500
		 hover:bg-primary-600
		 text-gray-900
		  py-2
		   mt-4
		    px-4 
			font-medium
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
