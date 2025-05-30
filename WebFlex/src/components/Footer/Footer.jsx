import React from 'react'
import './Footer.css'
import twitter_icon from '../../assets/twitter.svg'
import githubIcon from '../../assets/github.svg'
import instaIcon from '../../assets/instagram.svg'
import linkedIcon from '../../assets/linkedin.svg'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footer-icons">
        <img src={instaIcon}/>
        <img src={linkedIcon} />
        <img src={githubIcon} />
        <img src={twitter_icon} />
      </div>

      <ul className='footer-grid'>
        <li>Audio desc</li>
        <li>Help centre</li>
        <li>Gift card</li>
        <li>Media centre</li>
        <li>Investor Realation</li>
        <li>Jobs</li>
        <li>Terms & conds</li>
        <li>Privacy</li>
        <li>Legal notice</li>
        <li>Customer support</li>
        <li>Cookies</li>
        <li>contact us</li>
      </ul>
      <p className='copy-text'>©️1997-2025 WebFlex, Inc.</p>
    </div>
  )
}

export default Footer