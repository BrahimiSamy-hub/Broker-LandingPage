const Tarifs = () => {
  const tarifsData = [
    {
      id: 1,
      title: '01-10 utilisateurs',
      price: '9900 DA',
    },
    {
      id: 2,
      title: '11-30 utilisateurs',
      price: '8900 DA',
    },
    {
      id: 3,
      title: '+30 utilisateurs',
      price: '7900 DA',
    },
  ]

  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        {/* <p className='primary-subheading'>NOS TARIFS</p> */}
        <h1 className='primary-heading' id='Tarifs'>
          NOS TARIFS
        </h1>
        <p className='primary-text'>Choisir le plan qui répond a vos besoin.</p>
      </div>
      <div className='work-section-bottom'>
        {tarifsData.map((data) => (
          <div className='work-section-info' key={data.id}>
            <h2>{data.title}</h2>
            <p>
              {data.price} <br /> <br />/ utilisateur / mois
            </p>
          </div>
        ))}
      </div>
      <div className='work-section-top'>
        {/* <p className='primary-subheading'>NOS TARIFS</p> */}
        <h1 className='primary-heading'>DEVIS EN LIGNE</h1>
        <div style={{ dispaly: 'flex' }}>
          <p className='primary-text '>
            Combien d'utilisateurs vous avez ?
            <sub> (Délégués + superviseurs + kam + gérant)</sub>
            <input type='number' />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Tarifs
