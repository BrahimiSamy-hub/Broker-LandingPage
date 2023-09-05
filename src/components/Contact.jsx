// import contact from '../assets/broker1.png'
import { MdEmail } from 'react-icons/md'
import { SiGooglemaps } from 'react-icons/si'
import { BsFillTelephoneFill } from 'react-icons/bs'

const Contact = () => {
  return (
    <section className='work-section-top Contact' id='Contact'>
      <h1 className='primary-heading'>CONTACTEZ-NOUS</h1>
      {/* data-aos='flip-up' */}
      <div className='contact-container'>
        <div className='form-container'>
          <div>
            <div className='contact-row'>
              <div className='contact-box '>
                <h2>
                  <SiGooglemaps />
                </h2>
                <p>Centre d'affaire MASTERLY</p>
              </div>
              <div className='contact-box'>
                <h2>
                  <MdEmail />
                </h2>
                <p>Crm.broker.dz@gmail.com</p>
              </div>
            </div>
            <div className='contact-box contact-phone'>
              <h2>
                <BsFillTelephoneFill />
              </h2>
              <p>
                0779.09.44.55 <br /> 0661.76.35.20
              </p>
            </div>
          </div>
        </div>
        <div className='map'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.9542038279524!2d6.183302774871398!3d35.530129372636466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f411c7d47b81cd%3A0x6ce5d30e2e9442a!2sMasterly!5e0!3m2!1sfr!2sdz!4v1693422590421!5m2!1sfr!2sdz'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact
{
  /* <div classNameName=''>
        <div classNameName='text-container' data-aos='flip-up'>
          <h3 classNameName='font-contact'>CONTACTEZ-NOUS</h3>
          <small classNameName='font-contact'>SARL BROKER MARKETING </small>
          <ul classNameName='list-item-contact'>
            <li>Centre d'affaire MASTERLY .Batna</li>
            <li>Crm.broker.dz@gmail.com</li>
            <li>
              0779.09.44.55 <br />
              0661.76.35.20
            </li>
            <li>Nous sommes à votre entière écoute.</li>
          </ul>
        </div>
      </div> */
}
