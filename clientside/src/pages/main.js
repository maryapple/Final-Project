import React from 'react'
import Nav from '../components/nav'
import UserInfo from '../components/user-info'
import Panel from '../components/panel'

const MainPage = () => {
    return (
        <div className="main-page-container">
            <Panel />
            <UserInfo />
        </div>
    )
}

export default MainPage