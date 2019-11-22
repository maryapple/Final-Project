import React from 'react'
import { connect } from 'react-redux'
import getAccount from '../../actions/account-info'

class Account extends React.Component {
    componentDidMount() {
        this.props.getAccount(this.props.accountId)
    }

    renderAccount = () => {
        const { number } = this.props.accounts
        console.log(this.props.accounts)
        return <div>
            Счет №{number}
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

export default connect(mapStateToProps, mapDispatchToProps)(Account)
