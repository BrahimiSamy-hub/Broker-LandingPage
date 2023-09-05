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
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const menuOptions = [
    {
      text: 'Home',
      icon: <HomeIcon />,
    },
    {
      text: 'Fonctionalités',
      icon: <InfoIcon />,
    },
    {
      text: 'Tarifs',
      icon: <CommentRoundedIcon />,
    },
    {
      text: 'Devis',
      icon: <CommentRoundedIcon />,
    },
    {
      text: 'Contact',
      icon: <PhoneRoundedIcon />,
    },
    {
      text: 'Connexion',
      icon: <ShoppingCartRoundedIcon />,
    },
  ]
  return (
    <nav id='Acceuil'>
      <div className='nav-logo-container'>
        {/* <img src={Logo} alt='' /> */}
        <div>
          <a href='#Acceuil'>
            <h1 className='logo'>BROKER</h1>
          </a>
        </div>
      </div>
      <div className='navbar-links-container'>
        <a href='#Acceuil'>Acceuil</a>
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
                <ListItemButton>
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
