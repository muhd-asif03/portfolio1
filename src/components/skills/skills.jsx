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
            <p>I am Muhammed Asif S, a passionate web designer and a first-year MSc Computer Science student at the Kerala University Department of Computer Science. With a keen interest in creating visually appealing and functional web designs, I continually strive to enhance my skills and stay updated with the latest technologies in the field.</p>
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
