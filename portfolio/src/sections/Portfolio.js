import React from 'react'
import Divider from '../common/Divider'
import Project from '../common/Project'
import chess from '../assets/projects/chess.png'
import emotion from '../assets/projects/emotion.png'
import water from '../assets/projects/water.png'

const Portfolio = ({ openModal, setModalType }) => {
    return (
        <div className="page-section portfolio" id="portfolio">
            <div className="portfolio-container">
                <h2 className="section-heading">Portfolio</h2>
            </div>
            <Divider isDark={true} />
            <div className="projects">
                <Project title={"Chess AI"} img={chess} githubLink={"https://github.com/donavynhaley/chess-ai"} liveLink={"https://developer.mozilla.org/en-US/docs/Web/CSS/position"} openModal={openModal} setModalType={setModalType} modalType={0} />
                <Project title={"Water Plants Tracker"} img={water} githubLink={"https://github.com/BW-Water-My-Plants-1-Cori/front-end"} liveLink={"https://water-my-plants-ten.vercel.app/login"} openModal={openModal} setModalType={setModalType} modalType={1} />
                <Project title={"Emotion Tracker"} img={emotion} githubLink={"https://github.com/donavynhaley/bg-emotion-tracker-fe-b"} liveLink={"https://b.bgexperiencetracker.dev"} openModal={openModal} setModalType={setModalType} modalType={2} />

            </div>
        </div>
    )
}

export default Portfolio
