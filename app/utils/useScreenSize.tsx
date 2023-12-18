'use client'

import { useState, useEffect } from 'react'

const screenBreakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
}

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' && window.innerWidth ? window.innerWidth : undefined,
    height: typeof window !== 'undefined' && window.innerHeight ? window.innerHeight : undefined,
    mobileView:
      typeof window !== 'undefined' && window.innerWidth
        ? window.innerWidth < screenBreakpoints.sm
        : undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        mobileView: window.innerWidth < screenBreakpoints.sm,
      })
    }

    window.addEventListener('resize', handleResize)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return screenSize
}

export default useScreenSize
