
import './navbar.css';
import logo from '../../Assets/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../Assets/contact.png'


const Navbar=() =>{
    return(
      <nav className="navbar" >
       <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
       <Link className="desktopMenuListItem">Home</Link>
       <Link className="desktopMenuListItem">About</Link>
       <Link className="desktopMenuListItem">Projects</Link>
       <Link className="desktopMenuListItem">Contact</Link>
            </div>
           
            <button className="desktopMenuBtn">
              <img src={contactImg} alt="" className="desktopMenuImg"/>Contact Me
            </button>
       </nav>     
    )
}
export default Navbar