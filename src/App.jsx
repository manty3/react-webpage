import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Homecards from './components/Homecards'
import JobListings from './components/JobListings'
const App = () => {
  return (
    <>
    <Navbar />
     <Hero  />
   <Homecards />
  <JobListings/>
   

   

    


   

    <section class="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
    
    </>
  )
}


export default App
