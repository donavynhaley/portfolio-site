import React from 'react'

const Button = ({ text, clickFunction, svg, addClass }) => {
    return (
        <button className={`btn btn-primary ${addClass && addClass}`} onClick={clickFunction}>
            {svg && svg}
            {text}
        </button>
    )
}

export default Button
