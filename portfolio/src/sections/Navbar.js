import React, { useState, useEffect } from 'react'
import Button from '../common/Button'
import resume from '../assets/resume.pdf'

const Navbar = () => {
    const [shrink, setShrink] = useState(false);
    const [mobalMenu, setMobalMenu] = useState(false)
    const [activePortfolio, setActivePortfolio] = useState(false);
    const [activeAbout, setActiveAbout] = useState(false);
    const [activeContact, setActiveContact] = useState(false);

    // shrinks navbar if user scrolls down
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setShrink(window.scrollY > 0);


            const top = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const docHeight = getDocHeight();

            const totalDocScrollLength = docHeight - windowHeight;
            const scrollPostion = Math.floor(top / totalDocScrollLength * 100);

            // 18 69 85
            const portfolioPage = 18;
            const aboutPage = 69;
            const contactPage = 85;
            setActivePortfolio(scrollPostion >= portfolioPage && scrollPostion < aboutPage)
            setActiveAbout(scrollPostion >= aboutPage && scrollPostion < contactPage)
            setActiveContact(scrollPostion >= contactPage)
        })
    })

    // gets max for total docheight
    const getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }

    return (
        <nav className={`nav-container ${shrink ? "navbar-shrink" : ""} `} id="#mainNav">
            <div className="navbar">
                <div className="name-container">
                    <a className="name" href="#home">Donavyn Haley</a>
                    <Button text="MENU" addClass="mobile-menu-button" clickFunction={() => setMobalMenu(!mobalMenu)} />
                </div>
                <ul className={`navbar-nav ${mobalMenu ? "navbar-active fade-in" : ""}`}>
                    <li className="nav-item">
                        <a className={`nav-link ${activePortfolio ? "active" : ""}`} href="#portfolio">Portfolio</a>
                    </li>
                    <li className={`nav-item`}>
                        <a className={`nav-link ${activeAbout ? "active" : ""}`} href="#about">About</a>
                    </li>
                    <li className={`nav-item`}>
                        <a className={`nav-link ${activeContact ? "active" : ""}`} href="#contact">Contact</a>
                    </li>
                    <li className="nav-item" id="resume">
                        <a href={resume} download>
                            <Button svg={true} text="Resume" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar
