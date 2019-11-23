import React from 'react'
import './Panel.css'
import {Link} from 'react-router-dom'

const Panel = () => {
    return (
        <div className="panel-container">
            <Link  to='/check-balance'>
                <button type="button" className="btn btn-secondary">
                    Баланс
                </button>
                {/* <p>Баланс</p> */}
            </Link>
            <button type="button" className="btn btn-secondary">
                Переводы и платежи
            </button>
            <button type="button" className="btn btn-secondary">
                Курсы валют
            </button>
            <button type="button" className="btn btn-secondary">
                Новая карта
            </button>
            <button type="button" className="btn btn-secondary">
                Новый счет
            </button>
            <button type="button" className="btn btn-secondary">
                Взять кредит
            </button>
        </div>
    )
}

export default Panel