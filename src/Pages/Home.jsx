import React from 'react'
import Hero from '../components/Layout/Hero'
import LatestProjects from '../components/LatestProjects'
import BasicProjects from '../components/BasicProjects'

export default function Home() {
  return (
    <div className='text-white'>
       <div>
          <Hero />
       </div>

       <div>
          <LatestProjects />
       </div>

       <div>
          <BasicProjects />
       </div>

       
    </div>
  )
}
