import React from 'react'
import './UserInfo.css'
import axios from 'axios'

const UserInfo = (props) => {
    // id юзера из заглушки
    const arr = props.data.map((elem) => {
        return elem
    })
    const currentId = arr[0].id

    // По id пользователя найти id карты и счета
    axios.get(`/api/users/${currentId}`)
        .then(res => {
            // res(data)
            console.log(res)
        })
        .catch((error) =>
            console.log(error)
        )

    // Если карт или счетов несколько, вывести несколько (т.е. все) элементов

    return (
        <div className="user-info-container">
            <h1>Иванов Иван {currentId}</h1>
            <div>Счет №111111</div>
            <div>Карта №1111111</div>
        </div>
    )
}

export default UserInfo