import React, { Component } from 'react'
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MainPage from '../../pages/main'
import BalancePage from '../../pages/balance'
import CurrenciesPage from '../../pages/currencies'
import AuthPage from '../../pages/auth'

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
						<Route
							path="/login"
							component={AuthPage}
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
				</Switch>
			</BrowserRouter>
		)
	}
}
