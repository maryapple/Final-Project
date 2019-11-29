import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/login'

const Nav = (props) => {

    const logoutUser = () => {
        localStorage.removeItem("token")
        props.logoutUser()
    }

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
                        <Link to="/my-profile">
                            <i className="fas fa-user fa-3x"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" onClick={logoutUser}>
                            <i className="fas fa-sign-out-alt fa-3x"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(null, mapDispatchToProps)(Nav)