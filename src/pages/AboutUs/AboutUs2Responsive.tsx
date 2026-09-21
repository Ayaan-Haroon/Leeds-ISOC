import { useEffect, useState } from 'react'

import AboutUs2 from '../AboutUs/AboutUs2'
import AboutUs2Mobile from '../AboutUs/AboutUs2Mobile'

const AboutUs2Responsive = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640)
    }

    checkMobile()

    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  if (isMobile) {
    return <AboutUs2Mobile />
  }

  return <AboutUs2 />
}

export default AboutUs2Responsive