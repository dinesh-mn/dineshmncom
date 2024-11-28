import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Dinesh</a>
            <div className="nav__menu">
                <ul className="nav__list grid">
                    <li className="nav__item"> 
                        <a href="#home" className="nav__link">
                            <i className="uil uil-estate navcolor"></i>Home
                        </a>
                    </li>

                    <li className="nav__item"> 
                        <a href="#about" className="nav__link">
                            <i className="uil uil-user navcolor"> </i>About
                        </a>
                    </li>

                    <li className="nav__item"> 
                        <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt navcolor"> </i> Skills 
                        </a>
                    </li>

                    <li className="nav__item"> 
                        <a href="#services" className="nav__link">
                            <i className="uil uil-briefcase-alt navcolor"> </i> Services 
                        </a>
                    </li>

                    <li className="nav__item"> 
                        <a href="#portfolio" className="nav__link">
                            <i className="uil uil-scenary navcolor"> </i> Portfolio 
                        </a>
                    </li>

                    <li className="nav__item"> 
                        <a href="#contact" className="nav__link">
                            <i className="uil uil-message navcolor"> </i> Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header