import React from 'react'
import './navbar.css'

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <nav>
                    <div className="nav-left">
                        <div className="blue-square"></div>
                        <div className="nav-name">
                             <h1>Nikhil Babu</h1>
                             <h2>/ PROJECT MANAGER</h2>
                        </div>
                        
                    </div>
                    <div className="nav-right">
                        <div className="blue-square"></div>
                        <div className="nav-name"> Nikhil Babu</div>
                        <div className="nav-details">/  PROJECT MANAGER</div>
                    </div>
                </nav>
            </div>
        )
    }
}