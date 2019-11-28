import React from 'react'
import './Balance.css'
import getUserData from '../../actions/user-info'
import {connect} from 'react-redux'

class Balance extends React.Component {
    renderAccountsAndCards = () => {
        let totalBalanceAccount = 0

        if (this.props.users.accounts && this.props.users.cards) {
            const accountItems = this.props.users.accounts.map(elem => {
                totalBalanceAccount += parseInt(elem.balance)
                return (<div className="account-details-div">
                    <div className="account-details-number">Счет №{elem.number}</div>
                    <div>Действителен до {elem.until}</div>
                    <div>Баланс {elem.balance}</div>
                </div>)
            })

            const cardItems = this.props.users.cards.map(elem => {
                totalBalanceAccount += parseInt(elem.balance)
                return (<div className="account-details-div">
                    <div className="account-details-number">Карта №{elem.number}</div>
                    <div>Действителен до {elem.until}</div>
                    <div>Баланс {elem.balance}</div>
                </div>)
            })

            return (
                <div className="balance-container">
                    <p>Баланс счетов и карт</p>
                    {accountItems}
                    {cardItems}
                    <div className="balance-header">
                        Общий баланс
                </div>
                    <div>{totalBalanceAccount.toFixed(2)}</div>
                </div>
            )
        }

        else if (!this.props.users.accounts && this.props.users.cards) {
            const cardItems = this.props.users.cards.map(elem => {
                totalBalanceAccount += parseInt(elem.balance)
                return (<div className="account-details-div">
                    <div className="account-details-number">Карта №{elem.number}</div>
                    <div>Действителен до {elem.until}</div>
                    <div>Баланс {elem.balance}</div>
                </div>)
            })

            return (
                <div className="balance-container">
                    <p>Баланс счетов и карт</p>
                    {cardItems}
                    <div className="balance-header">
                        Общий баланс
                </div>
                    <div>{totalBalanceAccount.toFixed(2)}</div>
                </div>
            )
        }

        else if (this.props.users.accounts && !this.props.users.cards) {
            const accountItems = this.props.users.accounts.map(elem => {
                totalBalanceAccount += parseInt(elem.balance)
                return (<div className="account-details-div">
                    <div className="account-details-number">Счет №{elem.number}</div>
                    <div>Действителен до {elem.until}</div>
                    <div>Баланс {elem.balance}</div>
                </div>)
            })

            return (
                <div className="balance-container">
                    <p>Баланс счетов и карт</p>
                    {accountItems}
                    <div className="balance-header">
                        Общий баланс
                    </div>
                    <div>{totalBalanceAccount.toFixed(2)}</div>
                </div>
            )
        }

        else {
            return (
                <div className="balance-container">
                    <p>Баланс счетов и карт</p>
                    <div className="balance-header">
                        У вас нет счетов и карт
                    </div>
                </div>
            )
        }

        /* const accountItems = this.props.users.accounts.map(elem => {
            totalBalanceAccount += parseInt(elem.balance)
            return (<div className="account-details-div">
                        <div className="account-details-number">Счет №{elem.number}</div>
                        <div>Действителен до {elem.until}</div>
                        <div>Баланс {elem.balance}</div>
                    </div>)
        })

        const cardItems = this.props.users.cards.map(elem => {
            totalBalanceAccount += parseInt(elem.balance)
            return (<div className="account-details-div">
                <div className="account-details-number">Карта №{elem.number}</div>
                <div>Действителен до {elem.until}</div>
                <div>Баланс {elem.balance}</div>
            </div>)
        }) */

        /* return (
            <div className="balance-container">
                <p>Баланс счетов и карт</p>
                {accountItems}
                {cardItems}
                <div className="balance-header">
                    Общий баланс
                </div>
                <div>{totalBalanceAccount.toFixed(2)}</div>
            </div>
        ) */
    }

    render() {
        return this.renderAccountsAndCards()
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

export default connect(mapStateToProps, mapDispatchToProps)(Balance)