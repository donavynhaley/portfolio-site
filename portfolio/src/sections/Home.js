import React from 'react'
import headshot from "../assets/avataaars.svg"
import Divider from "../common/Divider"
const Home = () => {
    return (
        <section className="home-container">
            <div className="home-contents">
                <img className="headshot" src={headshot} alt="headshot" />
                <h1 className="home-heading">Donavyn Haley</h1>
                <Divider isDark={false} />
                <p className="home-subheading">Web Developer - AI Enthusiast - Programmer</p>
            </div>
        </section>
    )
}

export default Home
