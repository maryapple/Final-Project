import React from 'react'
import Balance from '../components/balance'
import Nav from '../components/nav'

const BalancePage = () => {
    return (
        <div className="main-container">
            <Nav />
            <div className="main-page-container">
                <Balance />
            </div>
        </div>
    )
}

export default BalancePage