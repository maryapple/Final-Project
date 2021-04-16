import React, {useState} from "react"
import {Field, Form} from "react-final-form"
import Styles from './Styles'
import {calculateOverpayment, calculateMinSalary, calculatePaymentPerMonth, calculatePercent, sumOfDebt} from "./utils";

const required = value => (value ? undefined : 'Обязательно')
const mustBeNumber = value => (isNaN(value) ? 'Введите число' : undefined)
const minValue = min => value =>
    isNaN(value) || value >= min ? undefined : `Минимальная сумма ${min}`
const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)


export const MortgageCalculator = () => {
    const [totalPrice, setSumOfDebt] = useState(0)
    const [paymentPerMonth, setPaymentPerMonth] = useState(0)
    const [overpayment, setOverpayment] = useState(0)
    const [percent, setPercent] = useState(0)
    const [minSalary, setMinSalary] = useState(0)
    const [isResultCorrect, setResult] = useState(false)

    const onSubmit = values => {
        const priceOfHouse = values.priceOfHouse || 1000000
        const firstPayment = values.firstPayment
        const hasSalaryCard = values.salaryCard
        const typeOfHouse = values.typeOfHouse
        const ages = values.ages

        if (values.priceOfHouse > firstPayment * 2) {
            setResult(true)

            setSumOfDebt(sumOfDebt(priceOfHouse, firstPayment))
            setPercent(calculatePercent(priceOfHouse, firstPayment, hasSalaryCard, typeOfHouse))
            setPaymentPerMonth(calculatePaymentPerMonth(priceOfHouse, firstPayment, ages))
            setOverpayment(calculateOverpayment(priceOfHouse, firstPayment, ages))
            setMinSalary(calculateMinSalary(priceOfHouse, firstPayment, ages))
        }
        else {
            setResult(false)
        }
    }

    return (
        <Styles>
            <h1>Калькулятор ипотеки Банка X</h1>
            <Form
                onSubmit={onSubmit}
                initialValues={{
                    typeOfHouse: 'Новостройка',
                    priceOfHouse: 15000000,
                    firstPayment: 3000000,
                    salaryCard: false,
                    ages: 5
                }}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <h2>Данные</h2>
                        <div>
                            <label>Тип недвижимости</label>
                            <Field name="typeOfHouse" component="select">
                                <option value="newBuilding">Новостройка</option>
                                <option value="secondaryHousing">Вторичное жилье</option>
                            </Field>
                        </div>
                        <Field
                            name="priceOfHouse"
                            validate={composeValidators(required, mustBeNumber, minValue(500000))}
                        >
                            {({ input, meta }) => (
                                <div>
                                    <label>Стоимость недвижимости</label>
                                    <input {...input} type="text" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field
                            name="firstPayment"
                            validate={composeValidators(required, mustBeNumber, minValue(50000))}
                        >
                            {({ input, meta }) => (
                                <div>
                                    <label>Первый взнос</label>
                                    <input {...input} type="text" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <div>
                            <label>Есть зарплатная карта Банка X</label>
                            <Field name="salaryCard" component="input" type="checkbox" />
                        </div>
                        <Field
                            name="ages"
                            validate={composeValidators(required, mustBeNumber, minValue(1))}
                        >
                            {({ input, meta }) => (
                                <div>
                                    <label>Срок ипотеки, лет</label>
                                    <input {...input} type="text" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <div className="buttons">
                            <button type="submit" disabled={submitting || pristine}>
                                Рассчитать
                            </button>
                        </div>

                        {isResultCorrect ? <>
                            <h2>Оплата</h2>
                            <div>
                                <label>Ежемесячный платеж</label>
                                <Field
                                    name="paymentPerMonth"
                                    component="input"
                                    type="number"
                                    placeholder={paymentPerMonth}
                                    disabled={true}
                                />
                            </div>
                            <div>
                                <label>Сумма ипотеки</label>
                                <Field
                                    name="totalPrice"
                                    component="input"
                                    type="number"
                                    placeholder={totalPrice}
                                    disabled={true}
                                />
                            </div>
                            <div>
                                <label>Сумма переплаты</label>
                                <Field
                                    name="overpayment"
                                    component="input"
                                    type="number"
                                    placeholder={overpayment}
                                    disabled={true}
                                />
                            </div>
                            <div>
                                <label>Процентная ставка</label>
                                <Field
                                    name="percent"
                                    component="input"
                                    type="text"
                                    placeholder={percent + "%"}
                                    disabled={true}
                                />
                            </div>
                            <div>
                                <label>Необходимый доход</label>
                                <Field
                                    name="minSalary"
                                    component="input"
                                    type="number"
                                    placeholder={minSalary}
                                    disabled={true}
                                />
                            </div>
                        </> : <></>}
                    </form>
                )}
            />
        </Styles>
    )
}
