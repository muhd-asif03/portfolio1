
import './navbar.css';
import logo from '../../Assets/logoMA.png';
import { Link } from 'react-scroll';
import contactImg from '../../Assets/contact.png'


const Navbar=() =>{
    return(
      <nav  className="navbar" >
       <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
       <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
       <Link activeClass='active' to='about' spy={true} smooth={true} offset={-80} duration={500}className="desktopMenuListItem">About</Link>
       <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-80} duration={500}className="desktopMenuListItem">Projects</Link>
       <Link activeClass='active' to='' spy={true} smooth={true} offset={-80} duration={500}className="desktopMenuListItem">Goals</Link>
            </div>
           
            <button className="desktopMenuBtn" onClick={() =>{
                document.getElementById('Contact').scrollIntoView({behavior:'smooth'});
            }}>
              <img src={contactImg} alt="" className="desktopMenuImg"/>Contact Me
            </button>
       </nav>     
    )
}
export default Navbar