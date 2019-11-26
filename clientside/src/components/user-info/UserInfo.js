import React from 'react'
import './UserInfo.css'
import { connect } from 'react-redux'
import getUserData from '../../actions/user-info'
import Card from './Card'
import Account from './Account'

class UserInfo extends React.Component {
    componentDidMount() {
        this.props.setUserData(1)
    }

    renderUser = () => {
        const { name, cards, accounts } = this.props.users
        
        if (accounts && cards) {
            const accountItems = accounts.map(elem => {
                return <Account
                    number={elem.number}
                    key={elem.id}
                />
            })

            const cardItems = cards.map(elem => {
                return <Card
                    number={elem.number}
                    key={elem.id}
                />
            })
            return (
                <div className="user-info-container">
                    <h1>{name.title + " " + name.first + " " + name.last}</h1>
                    <h4>Ваши счета:</h4>
                    {accountItems}
                    <h4>Ваши карты:</h4>
                    {cardItems}
                </div>
            )
        }

        else if (accounts && !cards) {
            const accountItems = accounts.map(elem => {
                return <Account
                    number={elem.number}
                    key={elem.id}
                />
            })
            return (
                <div className="user-info-container">
                    <h1>{name.title + " " + name.first + " " + name.last}</h1>
                    <h4>Ваши счета:</h4>
                    {accountItems}
                    <h4>У Вас нет карт</h4>
                </div>
            )
        }
        else if (!accounts && cards) {
            const cardItems = cards.map(elem => {
                return <Card
                    number={elem.number}
                    key={elem.id}
                />
            })
            return (
                <div className="user-info-container">
                    <h1>{name.title + " " + name.first + " " + name.last}</h1>
                    <h4>У Вас нет счетов</h4>
                    <h4>Ваши карты:</h4>
                    {cardItems}
                </div>
            )
        }
        else {
            return (
                <div className="user-info-container">
                    <h1>{name.title + " " + name.first + " " + name.last}</h1>
                    <h4>У Вас нет карт или счетов</h4>
                </div>
            )
        }
            
        /* const accountItems = accounts.map(elem => {
            return <Account
                number={elem.number}
                key={elem.id}
            />
        })

        const cardItems = cards.map(elem => {
            return <Card
                number={elem.number}
                key={elem.id}
            />
        })
        
        return (
            <div className="user-info-container">
                <h1>{name.title + " " + name.first + " " + name.last}</h1>
                <h4>Ваши счета:</h4>
                {accountItems}
                <h4>Ваши карты:</h4>
                {cardItems}
            </div>
        ) */
    }

    render() {
        if (this.props.loading) {
            return (<div>загрузка</div>)
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
        setUserData: (userId) => dispatch(getUserData(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
