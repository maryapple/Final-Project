import React, { Component } from 'react'
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MainPage from '../../pages/main'
import BalancePage from '../../pages/balance'
import CurrenciesPage from '../../pages/currencies'
import LoginPage from '../../pages/login'
import RegisterPage from '../../pages/register'
import {connect} from 'react-redux'
import {getProfileFetch, logoutUser} from '../../actions/login'
import ProfilePage from '../../pages/profile'
import NewCardPage from '../../pages/new-card'
import NewAccountPage from '../../pages/new-account'

class App extends Component {
	componentDidMount() {
		this.props.getProfileFetch()
	}
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route
						path="/login"
						component={LoginPage}
					/>
					<Route
						path="/register"
						component={RegisterPage}
					/>
					<Route
						path="/"
						component={MainPage}
						exact
					/>
					<Route
						path="/check-balance"
						component={BalancePage}
					/>
					<Route
						path="/currencies"
						component={CurrenciesPage}
					/>
					<Route
						path="/my-profile"
						component={ProfilePage} 
					/>
					<Route
						path="/new-card"
						component={NewCardPage}
					/>
					<Route
						path="/new-account"
						component={NewAccountPage}
					/>
				</Switch>
				
			</BrowserRouter>
		)
	}
}

const mapStateToProps = state => ({
	currentUser: state.login.currentUser
})

const mapDispatchToProps = dispatch => ({
	getProfileFetch: () => dispatch(getProfileFetch()),
	logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)