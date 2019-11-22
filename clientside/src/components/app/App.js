import React, { Component } from 'react'
import './App.css'
import Nav from '../nav'
// import {Route, Switch} from 'react-router-dom'
import Panel from '../panel'
import UserInfo from '../user-info'

export default class App extends Component {
	render() {
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
