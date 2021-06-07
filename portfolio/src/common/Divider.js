import React from 'react'
import brackets from "../assets/brackets.svg"

const Divider = ({isDark}) => {
    
    return (
        <div className={`divider-custom ${isDark ? "divider-dark" : ""}` }>
            <div className="divider-custom-line left" />
            <div className="divider-custom-icon" >
                <img className={`brackets ${isDark ? "" : "brackets-white"}`} src={brackets} alt="brackets" />
            </div>
            <div className="divider-custom-line right" />
        </div>
    )
}

export default Divider
