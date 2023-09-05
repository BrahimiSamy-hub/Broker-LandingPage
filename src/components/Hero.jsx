import hero from '../assets/ORL58511.png'
import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    // Function to update the screen width state
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    // Add an event listener for the window's resize event
    window.addEventListener('resize', updateScreenWidth)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenWidth)
    }
  }, [])

  return (
    <section className='hero row container'>
      <div className=''>
        <div className='logo-hero'>
          <h1 className='font-broker'>BROKER</h1>
          {/* <p className='font-CRM'>CRM</p> */}
        </div>
        <div className='slang-hero'>
          <p className='text-between'>Votre Succès,</p>
          <p>Notre Engagement</p>
        </div>
      </div>
      {screenWidth <= 600 && (
        <div className='row'>
          <img src={hero} alt='' />
        </div>
      )}
    </section>
    // <div className='container' data-aos='fade-up'>
    //   <div className='nav-logo-container'>
    //     <img className='' src={hero} alt='' />
    //   </div>
    //   <div className='text'>
    //     <div className='hero2'>
    //       <div className='logo-hero'>
    //         <h1 className='font-broker'>BROKER</h1>
    //         <p className='font-CRM'>CRM</p>
    //       </div>
    //       <div className='slang-hero'>
    //         <p className='text-between'>Votre Succès,</p>
    //         <p>Notre Engagement</p>
    //       </div>
    //     </div>
    //     <p className='text-hero'>
    //       Une solution dédiée aux entreprises pharmaceutiques et
    //       parapharmaceutiques
    //     </p>
    //   </div>
    // </div>
  )
}

export default Hero
