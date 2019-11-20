import React, { Component } from 'react'
import './App.css'
import Nav from '../nav'
import {Route, Switch} from 'react-router-dom'
import Panel from '../panel'

export default class App extends Component {
	render() {
		return (
			<div className="main-container">
				<Nav />
				<Panel />
			</div>
		)
	}
}
