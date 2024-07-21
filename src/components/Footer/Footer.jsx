import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-icons">
    <a href="https://www.facebook.com/NetflixIN" target="_blank">
            <FaFacebook style={{ color: '#1877F2' }} className="img" />
    </a>
      <a href="https://www.instagram.com/netflix" target="_blank"><FaInstagram style={{color:'#E1306C'}} className='img' /></a>
      <a href="https://x.com/netflix" target="_blank"><FaTwitter style={{color:'1DA1F2'}} className='img'/></a>
      <a href="https://www.youtube.com/netflix" target="_blank"><FaYoutube style={{color:'FF0000'}} className='img'/></a>
    </div>
    <ul>
      <li>Audio Description</li>
      <li>Help Center</li>
      <li>Gift Cards</li>
      <li>Media Centre</li>
      <li>Investor Relations</li>
      <li>Jobs</li>
      <li>Terms of Use</li>
      <li>Privacy</li>
      <li>Legal Notices</li>
      <li>Cookie Preferences</li>
      <li>Corporate Information</li>
      <li>Contact Us</li>
    </ul>
    <p className='copyright-text'>&copy; 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer