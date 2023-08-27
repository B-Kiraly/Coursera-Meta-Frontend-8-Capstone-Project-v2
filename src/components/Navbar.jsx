import Header from "../subcomponents/Header"
import { useState, useEffect } from "react";

export default function Navbar() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
          setWindowWidth(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

    const [displayNav, setDisplayNav] = useState(false)


    return (
        <div className="container topbar">
            <Header />
            <button className="nav-toggle" onClick={() => setDisplayNav(!displayNav)}>
                <span className="hamburger"></span>
            </button>
            <nav
            className='nav'
            style={windowWidth <= 600? displayNav? {display: "flex"}: {display: "none"}: {display: "flex"}}
            >
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <a href='/' className='nav__link'>
                            Home
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='/about' className='nav__link'>
                            About
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='/menu' className='nav__link'>
                            Menu
                        </a>
                    </li>
                </ul>
                <ul className="nav__list">
                    <li className='nav__item'>
                        <a href='/reserve' className='nav__link'>
                            Reservations
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='/order' className='nav__link'>
                            Order Online
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='/login' className='nav__link'>
                            Login
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

  )
}
