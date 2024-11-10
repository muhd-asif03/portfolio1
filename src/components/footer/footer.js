import React from 'react'
import './footer.css'
import user_icon from './../../Assets/user_icon.svg'


const footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'></div>
      <div className='footer-top-left'>
        
        <p>I am a web Designer with experiance in creating visual appealing and user friendly websites</p>
      </div>
      <div className='footer-top-right'></div>
      <div className='footer-email-input'></div>
      <img src={user_icon} alt=''/> 
      <input type='email' placeholder='enter your email'></input>
      <div className='footer-subscribe'>subscribe
        <hr/>
        <div className='footer-bottom'>
            <p className='footer-bottom-left'>2024 Asif.all rights reserved</p>
            <div className='footer-right'>
            <p >terms of service</p>
            <p >privacy policy</p>
            <p >connect with me</p>
            </div>
            

        </div>
      </div>
    </div>
    
  )
}

export default footer
