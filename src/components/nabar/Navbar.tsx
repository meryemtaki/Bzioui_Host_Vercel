import { useEffect, useState } from 'react'
import './Navbar.css'
import { IoMenu } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [navActive, setNav] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 24) {
        setNav(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='navbar'>
      <div className='logo'>
        <a href='/'>
          <img src='/logo.png' alt='logo bzioui' />
        </a>
      </div>
      <div className={`navigation ${navActive ? 'active' : ''}`}>
        <ul>
          <li onClick={() => setIndex(0)}>
            <Link to='/' className={index === 0 ? 'active' : ''}>
              Acceuil
            </Link>
          </li>
          <li onClick={() => setIndex(1)}>
            <Link to='/about' className={index === 1 ? 'active' : ''}>
              A propos de nous
            </Link>
          </li>
          <li onClick={() => setIndex(0)} className="dropdown" style={{color:"#a4a4a4", fontSize:"19px"}}>
            <Link to='/' className={index === 2 ? 'active' : ''}>
              Nos projets <span className="arrow">&#9660;</span>
            </Link>
            <div className="dropdown-content">
              <a href="/project/project1">BASSATINE BOUSKOURA</a>
              <a href="/project/project2">BASSATINE ELWAHA</a>
              <a href="/project/project3">Le Patio</a>
              <a href="/project/project4">LE LOTUS</a>
            </div>
          </li>

          <li>
            <a href='/#whyus'>Syndic</a>
          </li>
          <li>
            <a href='/blog'>Actualités</a>
          </li>
          <li>
            <a href='./contactNous'>Contact</a>
          </li>
          
        </ul>
        <button className='btn-navbar'>Rendez-vous</button>
      </div>
      <div className='menu' onClick={() => setNav(!navActive)}>
        <IoMenu />
      </div>
    </div>


    
  )
}

export default Navbar
