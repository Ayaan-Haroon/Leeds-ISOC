import { useEffect, useState } from 'react'

import Committee from './Committee'
import CommitteeMobile from './CommitteMobile'

const CommitteeResponsive = () => {
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
    return <CommitteeMobile />
  }

  return <Committee />
}

export default CommitteeResponsive