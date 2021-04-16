import Nav from "../components/nav";
import React from "react";
import {MortgageCalculator} from "../components/MortgageCalculator/MortgageCalculator";

export const MortgageCalculatorPage = () => {
    return (
        <div className="main-container">
            <Nav />
            <div className="main-page-container">
                <MortgageCalculator />
            </div>
        </div>
    )
}
