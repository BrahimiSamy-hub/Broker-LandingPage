import hero from '../assets/Hero.png'

const Hero = () => {
  return (
    <div className='container'>
      <div className='nav-logo-container'>
        <img className='' src={hero} alt='' />
      </div>
      <div className='text'>
        {/* <div className='home-bannerImage-container'>
          <img src={hero} alt='' />
        </div> */}
        <div className='hero'>
          <div className='logo-hero'>
            <h1 className='font-broker'>broker</h1>
            <p className='font-CRM'>CRM</p>
          </div>
          <div className='slang-hero'>
            <p className='text-between'>Votre Succès,</p>
            <p>Notre Engagement</p>
          </div>
        </div>
        <p className='text-hero'>
          Une solution dédiée aux entreprises pharmaceutiques et
          parapharmaceutiques
        </p>
      </div>
    </div>
  )
}

export default Hero
