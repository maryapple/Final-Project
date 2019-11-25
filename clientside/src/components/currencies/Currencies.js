import React from 'react'
import './Currencies.css'
import { connect } from 'react-redux'
import getExchangeRate from '../../actions/currencies'

class Currencies extends React.Component {
    componentDidMount () {
        this.props.getExchangeRate()
    }

    renderCurr = () => {
        const { USD, EUR, RUB } = this.props.currencies
        // console.log(USD, EUR)

        const onInputChange = () => {
            alert('12')
        }

        return (
            <div className="currencies-container">
                <div className="currencies-header">Перевод денежных средств в иностранные валюты</div>
                <table>
                    <thead>
                        <tr>
                            <th>RUB</th>
                            <th>USD</th>
                            <th>EUR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{RUB}</td>
                            <td>{USD}</td>
                            <td>{EUR}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="converter-header">Конвертер суммы</div>
                <div className="field">
                    <label htmlFor="sum-to-exchange">Введите сумму (в рублях)</label>
                    <input
                        id="sum-to-exchange"
                        onChange={this.onInputChange}
                        maxLength="9"
                        minLength="1"
                        pattern="[0-9]*"
                    />
                    
                    <div>Сумма в евро: </div>
                    <div>Сумма в долларах: </div>
                </div>
            </div>
        )
    }
    render () {
        return (
            this.renderCurr()
        )
    }
    
}

// export default Currencies

const mapStateToProps = (store) => {
    return {
        currencies: store.currencyInfo.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getExchangeRate: (curr1, curr2) => dispatch(getExchangeRate(curr1, curr2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Currencies)