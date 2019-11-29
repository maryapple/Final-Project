import React from 'react'
import { connect } from 'react-redux'
import './NewAccount.css'
import getAccountType from '../../actions/get-account-type'
import AccountItem from './AccountItem'

class NewAccount extends React.Component {

    componentDidMount() {
        this.props.getAccounts()
    }

    renderAccounts = () => {
        const { accounts } = this.props
        const accountItems = accounts.map(elem => {
            return <AccountItem
                image={elem.image}
                name={elem.name}
                type={elem.type}
                key={elem.id}
            />
        })

        return (
            <div className="new-card-container">
                <h1>Открыть новый счет</h1>
                <div className="cards-grid">
                    {accountItems}
                </div>
            </div>
        )
    }

    render() {
        if (this.props.loading) {
            return (<div>Загрузка</div>)
        }
        return this.renderAccounts()
    }
}

const mapStateToProps = (store) => {
    return {
        accounts: store.accountTypes.data,
        loading: store.accountTypes.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAccounts: () => dispatch(getAccountType())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAccount)