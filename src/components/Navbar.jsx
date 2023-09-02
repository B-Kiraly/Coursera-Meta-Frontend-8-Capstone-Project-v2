import Header from "../subcomponents/Header"
import { useState, useEffect } from "react";

export default function Navbar() {

    let navLinks = [{text: "Home", path: "/"}, {text: "About", path: "/about"}, {text: "Menu", path: "/menu"}, {text: "Book a Table", path: "/reservation"}, {text: "Order Online", path: "/orders"}, {text: "Login", path: "/login"}]

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
            onClick={() => {
                console.log(navLinks.slice(0, Math.round(navLinks.length / 2)))
                console.log(navLinks.slice(Math.round(navLinks.length / 2)))
            }}
            className='nav'
            style={windowWidth <= 600? displayNav? {display: "flex"}: {display: "none"}: {display: "flex"}}
            >
                <ul className='nav__list'>
                    {navLinks.slice(0, Math.round(navLinks.length / 2)).map(link => {
                        return (
                            <li className='nav__item' key={link.path}>
                                <a href={link.path} className='nav__link'>
                                    {link.text}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <ul className="nav__list">
                    {navLinks.slice(Math.round(navLinks.length / 2)).map(link => {
                        return (
                            <li className='nav__item' key={link.path}>
                                <a href={link.path} className='nav__link'>
                                    {link.text}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>

  )
}
