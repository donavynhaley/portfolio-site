import React from 'react'
import closeSVG from '../assets/close.svg'
const Button = ({ text, clickFunction, svg, addClass }) => {
    return (
        <button className={`btn btn-primary ${addClass !== undefined ? addClass : ""}`} onClick={clickFunction}>
            {svg === true ? <img className="btn-svg" src={closeSVG} alt="X" /> : null}
            {text}
        </button>
    )
}

export default Button
