import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>My Mini Bank</h3>
                </div>
                <ul className="list-unstyled components">
                    <li>
                        <a href="#" data-toggle="collapse" aria-expanded="false">
                            {/* <div className="li-content"> */}
                                <i className="fas fa-home fa-5x"></i>
                                {/* <p>home</p> */}
                            {/* </div> */}
                            
                        </a>
                    </li>
                    <li>
                        <a href="#"><i className="fas fa-user fa-5x"></i></a>
                    </li>
                    <li>
                        <a href="#" data-toggle="collapse" aria-expanded="false">
                            <i className="fas fa-cog fa-5x"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Nav