import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Fonctionalité from './components/Fonctionalité'
import Tarifs from './components/Tarifs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import ScrollToTop from 'react-scroll-to-top'

function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='App'>
      <ScrollToTop
        style={{
          backgroundColor: '#00406f',
          width: '3.5rem',
          height: '3.5rem',
          borderRadius: '25px',
        }}
        smooth
        viewBox='0 0 24 24'
        svgPath='M12.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-4,4a1,1,0,1,0,1.42,1.42L11,9.41V21a1,1,0,0,0,2,0V9.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM19,2H5A1,1,0,0,0,5,4H19a1,1,0,0,0,0-2Z'
        color='white'
        top={500}
      />
      <Navbar />
      <Hero />
      <Fonctionalité />
      <Tarifs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
