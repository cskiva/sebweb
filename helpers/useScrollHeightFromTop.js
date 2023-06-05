import { useEffect, useState } from 'react'

const useScrollHeightFromTop = () => {
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setScrollHeight(scrollTop)
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollHeight
}

export default useScrollHeightFromTop
