import React from 'react'
import './Panel.css'

const Panel = () => {
    return (
        <div className="panel-container">
            <button type="button" className="btn btn-secondary">Баланс</button>
            <button type="button" className="btn btn-secondary">Перевод</button>
            <button type="button" className="btn btn-secondary">Оплата</button>
            <button type="button" className="btn btn-secondary">Новая карта</button>
            <button type="button" className="btn btn-secondary">Новый счет</button>
            <button type="button" className="btn btn-secondary">Взять кредит</button>
        </div>
    )
}

export default Panel