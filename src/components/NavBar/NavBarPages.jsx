import React, { useContext, useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import '../NavBar/NavBar.css';
import { FaSun } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { ThemeContext } from '../Context/themeContext';
import { BsFillMoonStarsFill } from 'react-icons/bs';

const NavBarPages = () => {
  const [isMobile, setisMobile] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const changeNavBarColor = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener('scroll', changeNavBarColor);

    return () => {
      window.removeEventListener('scroll', changeNavBarColor);
    };
  }, []);

  return (
    <nav className={`${navbar ? 'navbarglass' : 'normalNavBar'} ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div>
        <h1 className={'logoname'}
          style={{
          color:theme === 'dark'?'white':'black'
          }}
        >PortFolio</h1>
      </div>
      <div className={isMobile ? 'menu-items-mobile' : 'menuitems'}>
        <ul >
          <li>
            <RouterLink className={`link ${theme === 'dark' ? 'dark-mode' : ''}`} to='/'>Home</RouterLink>
          </li>
          <li>
            <RouterLink to='/' className={`link ${theme === 'dark' ? 'dark-mode' : ''}`} >About</RouterLink>
          </li>
          <li>
            <RouterLink to='/' className={`link ${theme === 'dark' ? 'dark-mode' : ''}`} >Services</RouterLink>
          </li>
          <li>
            <RouterLink to='/' className={`link ${theme === 'dark' ? 'dark-mode' : ''}`} >Projects</RouterLink>
          </li>
          <li>
            <RouterLink to='b' className={`link ${theme === 'dark' ? 'dark-mode' : ''}`} >Blogs</RouterLink>
          </li>
          <li>
            <RouterLink to='/' className={`link ${theme === 'dark' ? 'dark-mode' : ''}`} >Contact</RouterLink>
          </li>
        </ul>
      </div>
      <div className="icons">
        <span onClick={toggleTheme}>
          {theme === 'light' ? (
            <BsFillMoonStarsFill className={`icon-tabler ${theme === 'dark' ? 'dark-mode' : ''}`} />
          ) : (
            <FaSun className={`icon-tabler ${theme === 'dark' ? 'dark-mode' : ''}`} />
          )}
        </span>
        <div className={`mobile-menu-icon ${theme === 'dark' ? 'dark-mode' : ''}`}>
          <span onClick={() => setisMobile(!isMobile)} className={`${theme === 'dark' ? 'dark-mode' : ''}`}>
            {isMobile ? (
              <MdOutlineClose className={`mobile-menu ${theme === 'dark' ? 'dark-mode' : ''}`} />
            ) : (
              <FaBars className={`mobile-menu ${theme === 'dark' ? 'dark-mode' : ''}`} />
            )}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavBarPages;
