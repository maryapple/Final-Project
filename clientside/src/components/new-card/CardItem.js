import React from 'react'
import "./NewCard.css"

const CardItem = (props) => {
    const {name, type, cashback, cost, system, image} = props
    return (
        <div className="card-element">
            <img src={image} width="200" />
            <div>Название: {name}</div>
            <div>Тип: {type}</div>
            <div>Кэшбек: {cashback}</div>
            <div>Стоимость обслуживания в год: {cost} рублей</div>
            <div>Платежная система: {system}</div>
        </div>
    )
}

export default CardItem