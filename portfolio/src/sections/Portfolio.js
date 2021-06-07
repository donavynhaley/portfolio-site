import React,{useState} from 'react'
import Divider from '../common/Divider'
import Project from '../common/Project'
import cabin from '../assets/projects/cabin.png'
const Portfolio = ({openModal}) => {
    return (
        <div className="page-section portfolio">
            <div className="portfolio-container">
                <h2 className="section-heading">Portfolio</h2>
            </div>
            <Divider isDark={true} />
            <div className="projects">
            <Project title={"Chess AI"} img={cabin} githubLink={"https://github.com"} liveLink ={"https://developer.mozilla.org/en-US/docs/Web/CSS/position"} openModal={openModal}/>                
            </div>
        </div>
    )
}

export default Portfolio
