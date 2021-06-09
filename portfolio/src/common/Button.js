import React from 'react'
import downloadSVG from '../assets/download.svg'
const Button = ({ text, clickFunction, svg, addClass }) => {
    return (
        <button className={`btn btn-primary ${addClass !== undefined ? addClass : ""}`} onClick={clickFunction}>
            {text}
            {svg === true ? <img className="btn-svg" src={downloadSVG} alt="X" /> : null}

        </button>
    )
}

export default Button
