import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [shrink, setShrink] = useState(false);
    // shrinks navbar if user scrolls down
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setShrink(window.scrollY > 0);
        })
    })

    return (
        <nav className={`nav-container ${shrink ? "navbar-shrink" : ""} `} id="#mainNav">
            <div className="navbar">
                <a className="name" href="#home">Donavyn Haley</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>

                </ul>
            </div>
        </nav>

    )
}

export default Navbar
