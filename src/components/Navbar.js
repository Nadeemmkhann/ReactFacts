import React from "react"
import logo from "./logo.svg"

export default function Navbar() {
    return (
        <header className="navbar">
            <nav className="nav-items">
                <img src={logo} alt="react-img"/>
                <h2>ReactFacts</h2>
            </nav>
            <h3>React - Project 1</h3>
        </header>
    )
}