import React from 'react'
import './Balance.css'
import UserInfo from '../user-info/UserInfo'

const Balance = (props) => {
    return (
        <div className="balance-container">
            <p>Баланс счетов и карт</p>
            <UserInfo />
        </div>
    )
}

export default Balance