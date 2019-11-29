import React from 'react'
import { connect } from 'react-redux'
import addAccount from '../../actions/add-account'
import "../new-card/NewCard.css"

const AccountItem = (props) => {
    const { name, image, currency, addAccount } = props

    const handleClick = () => {
        const obj = {
            "name": name
        }
        addAccount(props.user.id, obj)
    }

    return (
        <div className="card-element" >
            <img src={image} alt="card" height="150" />
            <div className="card-text">
                <div>Название: {name}</div>
                <div>Валюта счета: {currency}</div>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Открыть</button>
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
        addAccount: (userId, obj) => dispatch(addAccount(userId, obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountItem)
