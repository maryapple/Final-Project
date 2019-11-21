import React from 'react'
import './UserInfo.css'
import { connect } from 'react-redux'
import { getUserData } from '../../actions/main-page-actions'

class UserInfo extends React.Component {
    componentDidMount() {
        this.props.setUserData(1)
    }

    renderUser = () => {
        return (
            <div className="user-info-container">
                <h1>{this.props.users.name}</h1>
                <div>Счет №111111</div>
                <div>Карта №1111111</div>
            </div>
        )
    }

    render() {
        console.log(this.props.loading)

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
        setUserData: (userId) => dispatch(getUserData(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
