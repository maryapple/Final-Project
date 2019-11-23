import React from 'react'
import './Balance.css'
import getUserData from '../../actions/user-info'
import AccountWithDetails from './AccountDetails'
import {connect} from 'react-redux'

class Balance extends React.Component {

    componentDidMount = () => {
        this.props.setUserData(1)
    }

    renderAccountsAndCards = () => {
        const {accounts} = this.props.users
        const accountItems = accounts.map(elem => {
            return <AccountWithDetails
                accountId={elem}
                key={elem}
            />
        })

        return (
            <div className="balance-container">
                <p>Баланс счетов и карт</p>
                {accountItems}
            </div>
        )
    }

    render() {
        if (this.props.loading) {
            return (<div>загрузка</div>)
        }
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