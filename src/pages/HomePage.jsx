import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/Homecards'
import JobListings from '../components/JobListings'
import ViewAlljobs from '../components/ViewAlljobs'
const HomePage = () => {
  return (
   <>
   <Hero/>
   <HomeCards/>
   <JobListings isHome={true}/>
   <ViewAlljobs/>
   </>
  )
}

export default HomePage
