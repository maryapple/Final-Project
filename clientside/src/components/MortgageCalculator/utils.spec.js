import {calculateMinSalary, calculateOverpayment, calculatePaymentPerMonth, calculatePercent, sumOfDebt} from "./utils";

describe('MortgageCalculator', () => {
    // negative numbers and the ratio of numbers are checked in validation
    it('sumOfDebt calculates the sum of mortgage', () => {
        expect(sumOfDebt(1000000, 100000)).toEqual(900000)
    })

    it('calculatePercent, percent of secondary building, card of bank, price < 12mln', () => {
        expect(calculatePercent(1000000, 100000, false, 'secondaryHousing')).toEqual(6.1 - 0.5)
    })
    it('calculatePercent, percent of secondary building, no card of bank, price > 12mln', () => {
        expect(calculatePercent(20000000, 100000, false, 'secondaryHousing')).toEqual(7.2 - 0.5)
    })
    it('calculatePercent, percent of new building, no card of bank, price < 12mln', () => {
        expect(calculatePercent(12000000, 100000, false, 'Новостройка')).toEqual(6.1)
    })
    it('calculatePercent, percent of new building, no card of bank, price = 12mln', () => {
        expect(calculatePercent(12100000, 100000, false, 'Новостройка')).toEqual(6.1)
    })

    it('calculatePaymentPerMonth', () => {
        expect(calculatePaymentPerMonth(1000000, 10000, 3)).toEqual(30163)
        expect(calculatePaymentPerMonth(1000000, 10000, 5)).toEqual(19186)
        expect(calculatePaymentPerMonth(1000000, 10000, 10)).toEqual(11041)
    })

    it('calculateOverpayment', () => {
        expect(calculateOverpayment(1000000, 100000, 5)).toEqual(146520)
        expect(calculateOverpayment(1000000, 100000, 10)).toEqual(304560)
        expect(calculateOverpayment(15000000, 100000, 10)).toEqual(6045040)
    })

    it('calculateMinSalary, payment per month < 100000', () => {
        expect(calculateMinSalary(1000000, 100000, 5)).toEqual(35000)
    })
    it('calculateMinSalary, payment per month > 100000', () => {
        expect(calculateMinSalary(15000000, 1000000, 5)).toEqual(279000 + 100000)
    })
})
