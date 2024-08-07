import React from "react"
import reactLogo from '../images/react-icon.svg'

export default function Navbar () {
    return (
        <nav className="navbar contain">
            <div className="contain">
                <img src={reactLogo} alt="React Logo" className="nav--icon"/>
                <h3 className="nav--logo_text">ReactFacts</h3>
            </div>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
        
    )
}