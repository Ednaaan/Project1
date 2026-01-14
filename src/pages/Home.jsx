import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Services from '../Components/Services'
import RecentWork from '../Components/RecentWork'

import Content from '../Components/Content'
import ProcessSteps from '../Components/ProcessSteps'
import FAQ from '../Components/FAQ'
// import Contact from '../Components/Contact'

const Home = () => {
  return (
    <>
    
    <Hero/>
    <About/>
    <Services/>
    <RecentWork/>
    <Content/>
    <ProcessSteps/>
    
    <FAQ/>
   
    {/* <Contact/> */}
    </>
  )
}

export default Home
