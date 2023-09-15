import React from 'react'
import { BiLogoFacebook } from 'react-icons/bi'
import { BiLogoInstagram } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer>
      <div className='footer-content'>
        <h3>Sarl Broker Marketing</h3>
        <p>Copyright &copy; 2023</p>
        <ul className='socials'>
          <li>
            <a href='#'>
              <i>
                <BiLogoFacebook />
              </i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i>
                <BiLogoInstagram />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
