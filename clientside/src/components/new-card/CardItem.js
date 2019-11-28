import React from 'react'
import "./NewCard.css"
import { connect } from 'react-redux'
import addCard from '../../actions/add-card'

const CardItem = (props) => {
    const {name, type, cashback, cost, system, image} = props

    const handleClick = () => {
        console.log(props.user.id)
        addCard(props.user.id)
    }

    return (
        <div className="card-element" onClick={handleClick}>
            <img src={image} width="200" />
            <div>Название: {name}</div>
            <div>Тип: {type}</div>
            <div>Кэшбек: {cashback}</div>
            <div>Стоимость обслуживания в год: {cost} рублей</div>
            <div>Платежная система: {system}</div>
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
        addCard: (userId) => dispatch(addCard(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardItem)
