import React from 'react'
import { connect } from 'react-redux'
import getAccount from '../../actions/account-info'

class AccountWithDetails extends React.Component {
    componentDidMount() {
        this.props.getAccount(this.props.accountId)
    }

    renderAccount = () => {
        const { number, until, balance } = this.props.accounts
        // console.log(this.props.accounts)
        return <div className="account-details-div">
            <div className="account-details-number">Счет №{number}</div>
            <div>Действителен до {until}</div>
            <div>Баланс {balance}</div>
        </div>
    }

    render() {
        if (this.props.loading) {
            return (<div>загрузка</div>)
        }
        return this.renderAccount()
    }
}

const mapStateToProps = (store) => {
    return {
        loading: store.accountInfo.isLoading,
        accounts: store.accountInfo.accountInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAccount: (accountId) => dispatch(getAccount(accountId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountWithDetails)
