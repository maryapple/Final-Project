import React, { Component } from 'react'
import './App.css'
import Nav from '../nav'
import {Route, Switch} from 'react-router-dom'

export default class App extends Component {
	render() {
		return (
			<div>
				<Nav />
			</div>
		)
	}
}