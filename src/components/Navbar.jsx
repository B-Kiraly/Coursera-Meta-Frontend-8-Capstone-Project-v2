import Header from "../subcomponents/Header"
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../providers/CartContext";

export default function Navbar() {

    const {cart} = useCart()

    const {pathname} = useLocation()

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
        <header className="topbar">
            <div className="container topbar__container">
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
                                <li 
                                className='nav__item' 
                                key={link.path} 
                                style={pathname === link.path? {backgroundColor: "yellow", outline: "3px solid #495E57"} : {}}
                                >
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
                                <li 
                                id={link.path === "/orders" && cart.length > 0? "nav__orders" : ""}
                                className='nav__item' 
                                key={link.path} 
                                style={pathname === link.path? {backgroundColor: "yellow", outline: "3px solid #495E57"} : {}}
                                value={cart.length}
                                >
                                    <a href={link.path} className='nav__link'>
                                        {link.text}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
        

  )
}
