export const sumOfDebt = (priceOfHouse, firstPayment) => priceOfHouse - firstPayment

export const calculatePercent = (priceOfHouse, firstPayment, hasSalaryCard, typeOfHouse) => {
    const percent = sumOfDebt(priceOfHouse, firstPayment) > 12000000 ? 7.2 : 6.1
    if (hasSalaryCard) {
        if (typeOfHouse === 'secondaryHousing') {
            return parseFloat((percent - 0.5 - 0.1).toFixed(1))
        }
        console.log(parseFloat((percent - 0.1).toFixed(1)))
        return parseFloat((percent - 0.1).toFixed(1))
    }
    if (typeOfHouse === 'secondaryHousing') {
        return parseFloat((percent - 0.5).toFixed(1))
    }
    return percent
}

export const calculatePaymentPerMonth = (priceOfHouse, firstPayment, ages) => {
    const sum = sumOfDebt(priceOfHouse, firstPayment)
    const percent = calculatePercent(priceOfHouse, firstPayment) / 12 / 100
    const amountOfMonths = ages * 12
    const paymentPerMonth = sum * percent * Math.pow((1 + percent), amountOfMonths) / (Math.pow((1 + percent), amountOfMonths) - 1)
    return Math.ceil(paymentPerMonth)
}

export const calculateOverpayment = (priceOfHouse, firstPayment, ages) => {
    const amountOfMonths = ages * 12
    const sum = sumOfDebt(priceOfHouse, firstPayment)
    return Math.ceil((amountOfMonths * calculatePaymentPerMonth(priceOfHouse, firstPayment, ages) - sum))
}

export const calculateMinSalary = (priceOfHouse, firstPayment, ages) => {
    const paymentPerMonth = calculatePaymentPerMonth(priceOfHouse, firstPayment, ages)
    if (paymentPerMonth > 100000) {
        return Math.ceil((paymentPerMonth + 100000) / 1000) * 1000
    }
    return Math.ceil(calculatePaymentPerMonth(priceOfHouse, firstPayment, ages) * 2 / 1000) * 1000
}
