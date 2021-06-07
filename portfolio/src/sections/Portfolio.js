import React from 'react'
import Divider from '../common/Divider'
import Project from '../common/Project'
import chess from '../assets/projects/chess.png'
import emotion from '../assets/projects/emotion.png'
import water from '../assets/projects/water.png'

const Portfolio = ({ openModal }) => {
    return (
        <div className="page-section portfolio" id="portfolio">
            <div className="portfolio-container">
                <h2 className="section-heading">Portfolio</h2>
            </div>
            <Divider isDark={true} />
            <div className="projects">
                <Project title={"Chess AI"} img={chess} githubLink={"https://github.com"} liveLink={"https://developer.mozilla.org/en-US/docs/Web/CSS/position"} openModal={openModal} />
                <Project title={"Water Plants Tracker"} img={water} githubLink={"https://github.com"} liveLink={"https://developer.mozilla.org/en-US/docs/Web/CSS/position"} openModal={openModal} />
                <Project title={"Emotion Tracker"} img={emotion} githubLink={"https://github.com"} liveLink={"https://developer.mozilla.org/en-US/docs/Web/CSS/position"} openModal={openModal} />

            </div>
        </div>
    )
}

export default Portfolio
