import React from 'react';
import './intro.css';
import bg from '../../Assets/bgimg.png';


const Intro = () => {
  return (
    <section  id="intro">
      {/* Added comment */}
        <div className="IntroContent">
            <span className="Hello">Hello,</span>
            <span className="Introtext">I'm <span className="IntroName">Asif </span> <br/> Website Designer</span>
            <p className="IntroPara">I am a web Designer with experiance in creating visual appealing and user friendly websites</p>
            
        </div>
        <img src={bg} alt=' 'className="bg"/>
    </section>
  )
}

export default Intro;
