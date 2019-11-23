import React from 'react'
import Nav from '../components/nav'
import UserInfo from '../components/user-info'
import Panel from '../components/panel'

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