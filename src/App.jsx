import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Disorders'
import Team from './components/Symptoms'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='min-h-screen'>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
