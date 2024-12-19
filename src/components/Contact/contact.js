import React from 'react'
import './contact.css'
import mailicon from './../../Assets/mail_icon.svg'
import locicon from './../../Assets/location_icon.svg'
import callicon from './../../Assets/call_icon.svg'


const contact = () => {
  return (
    // sample
    <div id='Contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
        
      </div>
      <div className='contact-section'>
        <div className='contact-left'> 
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects,so feel free to send me a messege about anything you want me to work on</p>
             <div className='contact-details'>
                <div className='contact-detail'>
             
             </div>

             <div className='contact-detail'>
             <img src={mailicon} alt=''/> <p>muhammedasifs1003@gmail.com</p>
             </div>

             <div className='contact-detail'>
             <img src={callicon} alt=''/> <p>1234567893</p>
             </div>

             <div className='contact-detail'>
             <img src={locicon} alt=''/><p>kerala,india</p>
             </div>
             </div>
             </div> 
             <form className='contact-right'>
                <label htmlFor=''>your name</label>
                <input type='text' placeholder='enter your name' name='name'/>
                <label htmlFor=''>your email</label>
                <input type='email' placeholder='enter your email' name='email'/>
                <label htmlFor=''>write your messege here</label>
                <textarea name='message'   rows="8" placeholder='Enter your messege'></textarea>
                <button type='submit' className='contact-submit'>Submit Now</button>
             </form>
      </div>
    </div>
  )
}

export default contact
