import React from 'react'
import dynamic from 'next/dynamic'

const Flow = () => {
       const Flow = dynamic(() => import('../../../components/germany/Roadmap'), {
         ssr: false,
       })
  return (
    <Flow/>
  )
}

export default Flow