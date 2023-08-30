import contact from '../assets/broker1.png'

const Footer = () => {
  return (
    <div id='Contact'>
      <div className='gfg'>
        <img src={contact} className='image-footer' />
        <div className='text-container'>
          <h3 className='font-contact'>CONTACTEZ-NOUS</h3>
          <small className='font-contact'>SARL BROKER MARKETING </small>
          <ul className='list-item-contact'>
            <li>Centre d'affaire MASTERLY .Batna</li>
            <li>Crm.broker.dz@gmail.com</li>
            <li>
              0779.09.44.55 <br />
              0661.76.35.20
            </li>
            <li>Nous sommes à votre entière écoute.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
