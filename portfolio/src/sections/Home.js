import React from 'react'
import headshot from "../assets/avataaars.svg"
import brackets from "../assets/brackets.svg"
const Home = () => {
    return (
        <section className="page-section home-container">
            <div className="home-contents">
                <img className="headshot" src={headshot} alt="headshot" />
                <h1 className="home-heading">Donavyn Haley</h1>
                <div className="divider-custom">
                    <div className="divider-custom-line left" />
                    <div className="divider-custom-icon" >
                        <img className="brackets" src={brackets} alt="brackets" />
                    </div>
                    <div className="divider-custom-line right" />
                </div>
                <p className="home-subheading">Web Developer - AI Enthusiast - Programmer</p>
            </div>
        </section>
    )
}

// Footer <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
export default Home
