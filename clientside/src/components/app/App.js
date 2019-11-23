import React, { Component } from 'react'
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {MainPage} from '../../pages/index'

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route
						path="/"
						component={MainPage}
						exact
					/>
				</Switch>
			</BrowserRouter>
		)
	}
}
