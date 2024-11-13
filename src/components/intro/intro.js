import React from 'react';
import './intro.css';
import bg from '../../Assets/bgimg.png';
import btnimg from '../../Assets/hireme.png'
import { Button, Link } from 'react-scroll';

const Intro = () => {
  return (
    <section  id="intro">
        <div className="IntroContent">
            <span className="Hello">Hello,</span>
            <span className="Introtext">I'm <span className="IntroName">Asif </span> <br/> Website Designer</span>
            <p className="IntroPara">I am a web Designer with experiance in creating visual appealing and user friendly websites</p>
            <Link><Button className="btn"><img src={btnimg} alt='hire' className='btnimg' />Hire Me </Button></Link>
        </div>
        <img src={bg} alt=' 'className="bg"/>
    </section>
  )
}

export default Intro;
