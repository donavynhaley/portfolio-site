import React from 'react'
import githubIcon from '../assets/github.svg'
import globeIcon from '../assets/globe.svg'
import plus from "../assets/plus.svg"


const Project = (props) => {
    const { title, img, githubLink, liveLink, openModal, setModalType, modalType } = props;
    return (
        <div className="project">
            <h3>{title}</h3>
            <div className="portfolio-item" >
                <div className="item-caption">
                    <div className="item-caption-content">
                        <div className="icons">
                            <a href={githubLink} target="_blank" rel="noreferrer">
                                <img src={githubIcon} alt="github icon" />
                            </a>
                            <a href={liveLink} target="_blank" rel="noreferrer">
                                <img src={globeIcon} alt="globe icon" />
                            </a>
                        </div>
                        <div className="click-modal" onClick={() => {
                            openModal();
                            setModalType(modalType)
                        }}>
                            <img src={plus} alt="see more" />
                        </div>
                    </div>
                </div>
                <img className="img-fluid" src={img} alt="cabin" />
            </div>
        </div>

    )
}

export default Project
