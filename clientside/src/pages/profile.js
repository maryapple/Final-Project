import React from 'react'
import Profile from '../components/profile'
import Nav from '../components/nav'

const ProfilePage = () => {
    return (
        <div className="main-container">
            <Nav />
            <div className="main-page-container">
                <Profile />
            </div>
        </div>
    )
}

export default ProfilePage