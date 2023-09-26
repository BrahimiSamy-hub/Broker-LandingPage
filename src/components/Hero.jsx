import hero from '../assets/ORL58511.webp'
import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', updateScreenWidth)

    return () => {
      window.removeEventListener('resize', updateScreenWidth)
    }
  }, [])

  return (
    <section className='hero row container'>
      <div className=''>
        <div className='logo-hero'>
          <h1 className='font-broker'>BROKER</h1>
        </div>
        <div className='slang-hero'>
          <p className='text-between'>Votre Succès,</p>
          <p>Notre Engagement</p>
        </div>
      </div>
      {screenWidth <= 999 && (
        <div className='row'>
          <img src={hero} alt='HERO' />
        </div>
      )}
    </section>
  )
}

export default Hero
