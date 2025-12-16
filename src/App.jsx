import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <div className="container">
      <Title subtitle='OUR PROGRAM' title='What We Offer'/>
      <Programs />
      <About />
      <Title subtitle='Gallery' title='Campus Photos'/>
      <Campus />
      <Title subtitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials />
      <Title subtitle='Contact US' title='Get in Touch'/>
      <Contact />
      <Footer />
    </div>

  </div>
)

export default App