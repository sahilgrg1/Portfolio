import React from 'react'
import './styles/Contact.scss'
import Linkdin from './icons/Linkdin.png'

function Contact() {
  return (
    <div className="contact-app" id="contact">
      <div className="contact-header">
          <h1>Contact</h1>
      </div>
      <div className="contact-address">
          <address>
              Email : sg940082@gmail.com<br/>
              Ph : +91 9588703734
          </address>
         
     <a href="https://www.linkedin.com/in/sahilgrg1/" target="_blank"> <img src={Linkdin} alt="Linkdin"/></a>
      </div>
    </div>
  )
}

export default Contact
