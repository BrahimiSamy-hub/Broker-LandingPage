import { ImStatsBars } from 'react-icons/im'
import {
  MdPersonSearch,
  MdVisibility,
  MdBorderColor,
  MdAssignmentTurnedIn,
} from 'react-icons/md'
import { CgPerformance } from 'react-icons/cg'
import { BiSolidReport } from 'react-icons/bi'
import { FaFileInvoiceDollar } from 'react-icons/fa'

const Data = [
  {
    id: '1',
    title: 'La prospection',
    icon: <MdPersonSearch color='#00406f' />,
  },
  {
    id: '2',
    title: 'Gestion du plan de tournée',
    icon: <MdAssignmentTurnedIn color='#00406f' />,
  },
  {
    id: '3',
    title: 'Gestion des visites',
    icon: <MdVisibility color='#00406f' />,
  },
  {
    id: '4',
    title: 'Rapports des visites ',
    icon: <BiSolidReport color='#00406f' />,
  },
  {
    id: '5',
    title: 'Gestion des bons de commande',
    icon: <MdBorderColor color='#00406f' />,
  },
  {
    id: '6',
    title: 'Gestion des notes de frais',
    icon: <FaFileInvoiceDollar color='#00406f' />,
  },
  {
    id: '7',
    title: 'Des analyses Statistiques détaillées ',
    icon: <ImStatsBars color='#00406f' />,
  },
  {
    id: '8',
    title: 'Indicateur de performance ',
    icon: (
      <path
        d='M3.76 17.01h12.48C17.34 15.63 18 13.9 18 12c0-4.41-3.58-8-8-8s-8 3.59-8 8c0 1.9.66 3.63 1.76 5.01zM9 6c0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1s-1-.44-1-1zM4 8c0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1s-1-.44-1-1zm4.52 3.4c.84-.83 6.51-3.5 6.51-3.5s-2.66 5.68-3.49 6.51c-.84.84-2.18.84-3.02 0-.83-.83-.83-2.18 0-3.01zM3 13c0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1s-1-.44-1-1zm6 0c0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1s-1-.44-1-1zm6 0c0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1s-1-.44-1-1z'
        fill='#00406f'
      ></path>
    ),
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
              <div className='heading'>
                <svg
                  width='40'
                  height='40'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  {item.icon}
                </svg>
                <br />
                <p style={{ color: '#00406f', marginTop: '15px' }}>
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Fonctionalité
