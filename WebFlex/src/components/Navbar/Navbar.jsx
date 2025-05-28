import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/banner.png'
import search_icon from '../../assets/search.png'
import bell_icon from '../../assets/bell.png'
import prof_icon from '../../assets/profile.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [hidden, setHidden] = useState(false);
  const [lastscroll, setLastscroll] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = () =>{
      const currentScroll = window.scrollY;
  
      if(currentScroll > lastscroll && currentScroll > 100){
        setHidden(true);
      } else{
        setHidden(false);
      }
  
      setLastscroll(currentScroll);
      setScrolled(currentScroll >50)
    };

    window.addEventListener('scroll', handleScroll)
    return() => window.removeEventListener('scroll',handleScroll);
  }, [lastscroll]);

  return (
    <div className= {`navbar ${hidden? 'hidden' : ''} ${scrolled?'scrolled':''}`}>
        <div className="navbar-left">
          <img src={logo} />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className="navbar-right">
          <img src={search_icon} className='icon' />
          <p>Children</p>
          <img src={bell_icon} className='icon' />
          <div className='navbar-profile'>
            <Link to="/login">
            <img src={prof_icon} className='profile' />
            </Link>
            {/* <img src={drop_icon} /> */}
            <div className="dropdown">
              <p>Sign out</p>
            </div>
          </div>
        </div>
    </div>

  )
}

export default Navbar