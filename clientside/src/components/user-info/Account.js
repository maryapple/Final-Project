import React from 'react'
import { connect } from 'react-redux'
import getAccount from '../../actions/account-info'

class Account extends React.Component {
    constructor (props) {
        super(props)
        this.props.getAccount(this.props.accountId)
    }
/*     componentDidMount() {
        this.props.getAccount(this.props.accountId)
    } */

    renderAccount = () => {
        console.log("ACCOUNTS:", this.props.accounts)
        return (
            this.props.accounts.map(elem => {
                console.log("ELEM", elem)
                return <div key={elem.id}>
                    Счет №{elem.number}
                </div>
            })
        )
    }

    render() {
        // console.log("ACCOUNTS:", this.props.accounts)
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
