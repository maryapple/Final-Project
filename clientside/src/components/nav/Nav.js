import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <div className="sidebar-container">
            <nav className="sidebar">
                <div className="sidebar-header">
                    <h3>My Bank</h3>
                </div>
                <ul>
                    <li>
                        <div className="li-content">
                            <div className="li-icon">
                                <i className="fas fa-home fa-3x"></i>
                            </div>
                            {/* <div className="li-text">
                                home
                            </div> */}
                        </div>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-user fa-3x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-cog fa-3x"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav