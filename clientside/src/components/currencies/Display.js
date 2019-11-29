import React, { Component } from 'react'
import { connect } from 'react-redux'

class Display extends Component {
    renderDisplay = () => {
        let {curr} = this.props
        const { USD, EUR } = this.props.currencies
        let {txt = 0} = this.props.myinput 
        curr === 'EUR' ? curr = EUR : curr = USD
        return (
            <div>
                {txt * curr}
            </div>
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