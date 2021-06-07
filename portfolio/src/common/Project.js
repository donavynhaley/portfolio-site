import React from 'react'
import githubIcon from '../assets/github.svg'
import globeIcon from '../assets/globe.svg'
import open from "../assets/open.svg"
const Project = ({title, img, githubLink, liveLink, openModal}) => {
    return (
        <div className="project">
            <h3>{title}</h3>
            <div className="portfolio-item" >
                <div className="item-caption">
                    <div className="item-caption-content">
                        <div className="icons">
                            <a href={githubLink} target="_blank" rel="noreferrer">
                                <img  src={githubIcon} alt="github icon" />
                            </a>
                            <a href={liveLink} target="_blank" rel="noreferrer">
                                <img src={globeIcon} alt="globe icon" />
                            </a>
                        </div>
                        <img className="icon" src={open} alt="see more" onClick={openModal} />
                    </div>
                </div>
                <img className="img-fluid" src={img} alt="cabin" />
            </div>
    </div>

    )
}

export default Project
