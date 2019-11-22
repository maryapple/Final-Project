import React from 'react'
import './UserInfo.css'
import { connect } from 'react-redux'
import { getUserData, getCard } from '../../actions/main-page-actions'
import Card from './Card'

class UserInfo extends React.Component {
    componentDidMount() {
        this.props.setUserData(1)
    }

    renderUser = () => {
        const { name, cards, accounts } = this.props.users

        /* // Проходимся по массиву карт, чтобы получить id каждый из них и передать в запрос, чтобы оттуда вытянуть информацию по карте
        cards.map(elem => {
            console.log(elem)
            this.props.getCard(elem)
            return <Card
                {...elem}
            />
        }) */
        

        return (
            <div className="user-info-container">
                <h1>{name.title + " " + name.first + " " + name.last}</h1>

                {/* Отрисовка карт */}
                {/* <div>Карта №1111111</div> */}
                {/* {cards} */}
            </div>
        )
    }

    render() {
        if (this.props.loading) {
            return (
                <div>загрузка</div>
            )
        }
        return this.renderUser()
        
    }
    
}

const mapStateToProps = (store) => {
    return {
        users: store.userInfo.data,
        loading: store.userInfo.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (userId) => dispatch(getUserData(userId)),
        getCard:  (cardId) => dispatch(getCard(cardId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
