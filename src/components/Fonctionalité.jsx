const Fonctionalité = () => {
  const Data = [
    {
      id: '1',
      title: 'La prospection',
      icon: '',
    },
    {
      id: '2',
      title: 'Gestion du plan de tournée',
      icon: '',
    },
    {
      id: '3',
      title: 'Gestion des visites',
      icon: '',
    },
    {
      id: '4',
      title: 'Rapports des visite ',
      icon: '',
    },
    {
      id: '5',
      title: 'Gestion des bons de commande',
      icon: '',
    },
    {
      id: '6',
      title: 'Gestion des notes de frais',
      icon: '',
    },
    {
      id: '7',
      title: 'Des analyses Statistiques détaillées ',
      icon: '',
    },
    {
      id: '8',
      title: 'Indicateur de performance ',
      icon: '',
    },
  ]
  return (
    <>
      <div id='Fonctionalités'>Fonctionalité</div>
      {Data.map((item) => (
        <div key={item.id}>
          <div>{item.icon}</div>
          <p>{item.title}</p>
        </div>
      ))}
    </>
  )
}

export default Fonctionalité
