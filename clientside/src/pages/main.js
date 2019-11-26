import React from 'react'
import UserInfo from '../components/user-info'
import Panel from '../components/panel'
import Nav from '../components/nav'

const MainPage = () => {
    return (
        <div className="main-container">
            <Nav />
            <div className="main-page-container">
                <Panel />
                <UserInfo />
            </div>
        </div>
        
    )
}

export default MainPage