import React from 'react'
import githubSVG from '../assets/socials/github.svg'
import linkedinSVG from '../assets/socials/linkedin.svg'
import devSVG from '../assets/socials/dev.svg'
import Button from '../common/Button'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-contents">
                    <div className="socials">
                        <h4>Socials</h4>
                        <div className="links">
                            <a className="link" href="www.google.com" target="_blank" rel="noreferrer">
                                <img src={githubSVG} alt="github" />
                            </a>
                            <a className="link" href="www.google.com" target="_blank" rel="noreferrer">
                                <img src={linkedinSVG} alt="linkedin" />
                            </a>
                            <a className="link" href="www.google.com" target="_blank" rel="noreferrer">
                                <img src={devSVG} alt="dev.to" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="acknowledgements">
                <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        </>
    )
}

export default Footer
