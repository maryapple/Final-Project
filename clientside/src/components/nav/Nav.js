import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="sidebar-container">
            <nav className="sidebar">
                <div className="sidebar-header">
                    <h3>My Bank</h3>
                </div>
                <ul>
                    <li>
                        <Link to="/">
                            <i className="fas fa-home fa-3x"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-account">
                            <a href="#">
                                <i className="fas fa-user fa-3x"></i>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings">
                            <a href="#">
                                <i className="fas fa-cog fa-3x"></i>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav