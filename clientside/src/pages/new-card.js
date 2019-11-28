import React from 'react'
import NewCard from '../components/new-card'
import Nav from '../components/nav'

const NewCardPage = () => {
    return (
        <div className="main-container">
            <Nav />
            <div className="main-page-container">
                <NewCard />
            </div>
        </div>
    )
}

export default NewCardPage