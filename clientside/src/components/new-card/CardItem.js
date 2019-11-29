import React from 'react'
import "./NewCard.css"
import { connect } from 'react-redux'
import addCard from '../../actions/add-card'

const CardItem = (props) => {
    const {name, type, cashback, cost, system, image, addCard} = props

    const handleClick = () => {
        const obj = {
            "name": name
        }
        addCard(props.user.id, obj)
    }

    return (
        <div className="card-element" >
            <img src={image} alt="account" width="200" />
            <div className="card-text">
                <div>Название: {name}</div>
                <div>Тип: {type}</div>
                <div>Кэшбек: {cashback}</div>
                <div>Стоимость обслуживания в год: {cost} рублей</div>
                <div>Платежная система: {system}</div>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Заказать</button>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        user: store.userInfo.data,
        card: store.addCard.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCard: (userId, obj) => dispatch(addCard(userId, obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardItem)
