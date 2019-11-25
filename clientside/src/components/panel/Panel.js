import React from 'react'
import './Panel.css'
import {Link} from 'react-router-dom'

const Panel = () => {
    return (
        <div className="panel-container">
            <Link to='/check-balance'>
                <button type="button" className="btn btn-secondary">
                    Баланс
                </button>
            </Link>
            <Link to='/transfers-payments'>
                <button type="button" className="btn btn-secondary">
                    Переводы и платежи
                </button>
            </Link>
            <Link to='/currencies'>
                <button type="button" className="btn btn-secondary">
                    Курсы валют
                </button>
            </Link>
            <Link to='/new-card'>
                <button type="button" className="btn btn-secondary">
                    Новая карта
                </button>
            </Link>
            <Link to="/new-account">
                <button type="button" className="btn btn-secondary">
                    Новый счет
                </button>
            </Link>
            <Link to="/loan">
                <button type="button" className="btn btn-secondary">
                    Взять кредит
                </button>
            </Link>
        </div>
    )
}

export default Panel