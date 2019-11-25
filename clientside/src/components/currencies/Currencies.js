import React from 'react'
import './Currencies.css'
import { connect } from 'react-redux'
import getExchangeRate from '../../actions/currencies'
import updateInput from '../../actions/updateInput'
import Input from './Input'
import Display from './Display'

class Currencies extends React.Component {
    componentDidMount () {
        this.props.getExchangeRate()
    }

    renderCurr = () => {
        const { USD, EUR, RUB } = this.props.currencies
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
                    <label>Введите сумму (в рублях)</label>
                    <Input />
                    <div>Сумма в евро: </div>
                    <Display curr={'EUR'}/>
                    <div>Сумма в долларах: </div>
                    <Display curr={'USD'} />
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

const mapStateToProps = (store) => {
    return {
        currencies: store.currencyInfo.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getExchangeRate: () => dispatch(getExchangeRate()),
        updateInput: (input) => dispatch(updateInput(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Currencies)