import React from 'react'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className="container footer__container">
            <div className="footer__column">
              <img src="/assets/logo-alt.png" alt="A little lemon logo" className="footer__logo" />
            </div>
            <div className="footer__column">
              <p className="footer__header">Doormat Navigation</p>
              <a href='/' className="footer__link">Home</a>
              <a href='/' className="footer__link">About</a>
              <a href='/' className="footer__link">Menu</a>
              <a href='/' className="footer__link">Reservations</a>
              <a href='/' className="footer__link">Order Online</a>
              <a href='/' className="footer__link">Login</a>
            </div>
            <div className="footer__column">
              <p className="footer__header">Contact</p>
              <a href='/' className="footer__link">123 Lemon Lane</a>
              <a href='/' className="footer__link">0 123 456 789</a>
              <a href='/' className="footer__link">little.lemon@gmail.com</a>
            </div>
            <div className="footer__column">
              <p className="footer__header">Social Media Links</p>
              <a href='/' className="footer__link">Facebook</a>
              <a href='/' className="footer__link">Instagram</a>
              <a href='/' className="footer__link">Pinterest</a>
            </div>
        </div>
    </footer>
  )
}
