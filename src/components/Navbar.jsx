import { useState } from 'react'
import { HiOutlineBars3 } from 'react-icons/hi2'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import LoginIcon from '@mui/icons-material/Login'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setOpenMenu(false)
    }
  }

  const [openMenu, setOpenMenu] = useState(false)

  const menuOptions = [
    {
      text: 'Accueil',
      icon: <HomeIcon />,
      id: 'Accueil',
    },
    {
      text: 'Fonctionalités',
      icon: <InfoIcon />,
      id: 'Fonctionalités',
    },
    {
      text: 'Tarifs',
      icon: <AttachMoneyIcon />,
      id: 'Tarifs',
    },
    {
      text: 'Devis',
      icon: <PointOfSaleIcon />,
      id: 'Devis',
    },
    {
      text: 'Contact',
      icon: <ContactPhoneIcon />,
      id: 'Contact',
    },
    {
      text: 'Connexion',
      icon: <LoginIcon />,
      id: '',
    },
  ]
  return (
    <nav id='Accueil'>
      <div className='nav-logo-container'>
        <div>
          <a href='#Accueil'>
            <h1 className='logo'>BROKER</h1>
          </a>
        </div>
      </div>
      <div className='navbar-links-container'>
        <a href='#Accueil'>Accueil</a>
        <a href='#Fonctionalités'>Fonctionalités</a>
        <a href='#Tarifs'>Tarifs</a>
        <a href='#Devis'>Devis</a>
        <a href='#Contact'>Contact</a>
        <button type='button' className='primary-button'>
          Connexion
        </button>
      </div>
      <div className='navbar-menu-container'>
        <HiOutlineBars3 size={35} onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => scrollToSection(item.id)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar
