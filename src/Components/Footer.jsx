import React from 'react'
import projectLogo from "./footerLogo.png";
import "./styles.css"

const Footer = () => {
  return (
    <div className='footer-component'>
      <div>
        <img src={projectLogo} alt="" />
      </div>
       
      <ul>

        <li>Address</li>
        <li>Majestic,Bangalore,Karnataka,560028</li>
      </ul>
    </div>
  )
}

export default Footer
