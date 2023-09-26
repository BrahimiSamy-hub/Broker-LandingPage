import { useState } from 'react'

const Tarifs = () => {
  const tarifsData = [
    {
      id: 1,
      title: '01-10 utilisateurs',
      price: '9900 DA',
      maxUsers: 10,
    },
    {
      id: 2,
      title: '11-30 utilisateurs',
      price: '8900 DA',
      maxUsers: 30,
    },
    {
      id: 3,
      title: `+30 utilisateurs`,
      price: '7900 DA',
      maxUsers: Infinity,
    },
  ]
  const [userCount, setUserCount] = useState('')

  const handleUserCountChange = (event) => {
    setUserCount(parseInt(event.target.value, 10))
  }

  const calculateTotalPrice = () => {
    let totalPrice = 0
    for (const tier of tarifsData) {
      if (userCount <= tier.maxUsers) {
        totalPrice = userCount * parseInt(tier.price, 10)
        break
      }
    }

    return totalPrice
  }
  function formatCurrencyDZD(number) {
    const numString = number.toString()
    const formattedNumber = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    const currencyFormatted = `${formattedNumber} DZD`

    return currencyFormatted
  }
  const totalPrice = calculateTotalPrice()

  return (
    <div className='work-section-wrapper' id='Tarifs'>
      <div className='work-section-top'>
        <h1 className='primary-heading'>NOS TARIFS</h1>
        <p className='primary-text'>Choisir le plan qui répond a vos besoin.</p>
      </div>
      <div className='work-section-bottom'>
        {tarifsData.map((data) => (
          <div className='work-section-info' key={data.id}>
            <h2>{data.title}</h2>
            <p>
              {formatCurrencyDZD(data.price)}
              <sub> &nbsp;/ utilisateur / mois</sub>
            </p>
          </div>
        ))}
      </div>
      <div className='work-section-top'>
        <h1 className='primary-heading' id='Devis'>
          DEVIS EN LIGNE
        </h1>
        <div className='blasst-p'>
          <label id='tarif' className='primary-text '>
            Combien d'utilisateurs vous avez ?<br />
            <sub> Délégués + superviseurs + kam + gérant</sub>
            <div>
              <input
                id='devis'
                type='number'
                value={userCount}
                onChange={handleUserCountChange}
                className='input-tarifs'
              />
            </div>
          </label>
        </div>
        <div className='primary-text price'>
          <div className='price-card'>
            {formatCurrencyDZD(totalPrice)} &nbsp; / &nbsp; Mois
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {formatCurrencyDZD(totalPrice * 12)} &nbsp; / &nbsp; An
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tarifs
