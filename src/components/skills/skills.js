import React from 'react';
import './skills.css';
import aboutimg from '../../Assets/aboutimg.png'

const skills = () => {
  return (
    <div className='about'>
        <div className='about-title'>
        <h1>About Me</h1>
        </div>
        <div className="aboutsection">
        <div className="about-left">
            <img src={aboutimg} alt='' className='Aboutimg'></img>
        </div>
        <div className="about-right">
        <div className="about-para">
            <p>I am a web Designer with experiance in creating visual appealing and user friendly websites</p>
        </div>
        <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>Javascript</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>Python</p><hr style={{width:"70%"}}/></div>
             </div>
        </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3</h1>
                <p>Years of experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>2</h1>
                <p>Projects completed</p>
            </div>
            <hr />

        </div>
        </div>
        
        
  )
}

export default skills
