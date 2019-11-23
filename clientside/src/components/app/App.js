import React, { Component } from 'react'
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {MainPage} from '../../pages/index'
import Nav from '../nav'
import BalancePage from '../../pages/balance'

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<div className="main-container">
						<Nav />
						<Route
							path="/"
							component={MainPage}
							exact
						/>
						<Route
							path="/check-balance"
							component={BalancePage}
						/>
					</div>
				</Switch>
			</BrowserRouter>
		)
	}
}
