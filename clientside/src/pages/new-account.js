import React from 'react'
import NewAccount from '../components/new-account'
import Nav from '../components/nav'

const NewAccountPage = () => {
    return (
        <div className="main-container">
            <Nav />
            <div className="main-page-container">
                <NewAccount />
            </div>
        </div>
    )
}

export default NewAccountPage