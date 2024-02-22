import React from 'react'
import LandingPageHeader from './LandingPageHeader'
import LandingPageBody from './LandingPageBody'

const LandingPage = () => {
  return (
    <div className='flex flex-col w-full h-full'>
        <LandingPageHeader/>
        <LandingPageBody/>
    </div>
  )
}

export default LandingPage