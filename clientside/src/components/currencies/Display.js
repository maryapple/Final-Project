import React, { Component } from 'react'
import { connect } from 'react-redux'

class Display extends Component {
    renderDisplay = () => {
        let {curr} = this.props
        const { USD, EUR } = this.props.currencies
        let {txt} = this.props.myinput 
        
        
        curr === 'EUR' ? curr = EUR : curr = USD
        if (this.props.myinput === undefined) {
            txt = 0
        }

        console.log({txt}, this.props.myinput)
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