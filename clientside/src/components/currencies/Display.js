import React, { Component } from 'react'
import { connect } from 'react-redux'

class Display extends Component {
    renderDisplay = () => {
        // console.log(this.props)
        let {curr} = this.props
        const { USD, EUR } = this.props.currencies
        const {txt} = this.props.myinput 
        curr === 'EUR' ? curr = EUR : curr = USD
        return (
            <h4>
                {txt * curr}
            </h4>
        )
    }

    render() {
        return ( this.renderDisplay() )
    }
}

const mapStateToProps = (store) => {
    return {
        myinput: store.updateInput.input,
        currencies: store.currencyInfo.data
    }
}

export default connect(mapStateToProps)(Display)