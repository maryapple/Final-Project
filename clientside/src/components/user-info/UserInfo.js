import React from 'react'
import './UserInfo.css'

const UserInfo = () => {
    return (
        <div className="user-info-container">
            {/* Получить id пользователя */}
            {/* По id пользователя показать найти id карты и счета */}
            {/* Если карт или счетов несколько, вывести несколько (т.е. все) элементов */}
            <h1>Иванов Иван</h1>
            <div>Счет №111111</div>
            <div>Карта №1111111</div>
        </div>
    )
}

export default UserInfo