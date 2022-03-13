import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../css/navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <div>
            <nav className="navbar">
                <Link
                    to="domain.com"
                    className="navbar-logo"
                    onClick={closeMobileMenu}
                >
                    Logo
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link
                            to="domain.com"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/environment"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Environment
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/money"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Money
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/politics"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Politics
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/travel"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Travel
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
