import Header from "../subcomponents/Header"

export default function Navbar() {
  return (
    <div className="container main-grid">
        <Header />
        <nav className='nav'>
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
