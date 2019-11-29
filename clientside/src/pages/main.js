import React from 'react'
import UserInfo from '../components/user-info'
import Panel from '../components/panel'
import Nav from '../components/nav'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProfileFetch } from '../actions/login'

class MainPage extends React.Component {
    componentDidMount () {
        this.props.getProfileFetch()
    }
    
    render () {
        if (!localStorage.getItem('token')) {
            return <Redirect to="/login" />
        }
        return (
            <div className="main-container">
                <Nav />
                <div className="main-page-container">
                    <Panel />
                    <UserInfo />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.login.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProfileFetch: () => dispatch(getProfileFetch()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)