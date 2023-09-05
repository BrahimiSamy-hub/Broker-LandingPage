import { ImStatsBars } from 'react-icons/im'
import { MdPersonSearch, MdVisibility } from 'react-icons/md'
import { CgPerformance } from 'react-icons/cg'
import { BiSolidReport } from 'react-icons/bi'
import { FaFileInvoiceDollar } from 'react-icons/fa'

const Data = [
  {
    id: '1',
    title: 'La prospection',
    icon: <MdPersonSearch />,
  },
  {
    id: '2',
    title: 'Gestion du plan de tournée',
    icon: '',
  },
  {
    id: '3',
    title: 'Gestion des visites',
    icon: <MdVisibility />,
  },
  {
    id: '4',
    title: 'Rapports des visite ',
    icon: <BiSolidReport />,
  },
  {
    id: '5',
    title: 'Gestion des bons de commande',
    icon: <FaFileInvoiceDollar />,
  },
  {
    id: '6',
    title: 'Gestion des notes de frais',
    icon: '',
  },
  {
    id: '7',
    title: 'Des analyses Statistiques détaillées ',
    icon: <ImStatsBars />,
  },
  {
    id: '8',
    title: 'Indicateur de performance ',
    icon: <CgPerformance />,
  },
]

const Fonctionalité = () => {
  return (
    <section className=' Fonctionalités-section '>
      <h1 className='primary-heading' id='Fonctionalités'>
        Fonctionalités
      </h1>
      <div className='main'>
        <div className='main-fonct'>
          {/* data-aos='flip-up' */}
          {Data.map((item) => (
            <div className='card' key={item.id}>
              <p className='heading'>
                <i>{item.icon}</i>
                <br />
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Fonctionalité
