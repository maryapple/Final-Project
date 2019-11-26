import React from 'react'
import Currencies from '../components/currencies'
import Nav from '../components/nav'

const CurrenciesPage = () => {
    return (
        <div className="main-container">
            <Nav />
            <div className="main-page-container">
                <Currencies />
            </div>
        </div>
    )
}

export default CurrenciesPage