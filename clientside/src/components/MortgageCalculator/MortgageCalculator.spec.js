import React from "react"
// replace TODO
import {MortgageCalculator} from "./MortgageCalculator"
import {mount} from 'enzyme'
import {Field} from "react-final-form"

describe('MortgageCalculator', () => {
    it('MortgageCalculator submits form', () => {
        const wrapper = mount(<MortgageCalculator
            initialValues={{
                typeOfHouse: 'Новостройка',
                priceOfHouse: 15000000,
                fistPayment: 3000000,
                salaryCard: false,
                ages: 5,
            }}
        />)
        wrapper.update()
        expect(wrapper.find('form').props().children).toHaveLength(8)
        const inputFields = wrapper.find('form').find(Field)
        expect(inputFields).toHaveLength(5)
        expect(inputFields.find('select[name="typeOfHouse"]').props().value).toEqual('Новостройка')
        expect(inputFields.find('input[name="priceOfHouse"]').props().value).toEqual(15000000)
        expect(inputFields.find('input[name="firstPayment"]').props().value).toEqual(3000000)
        expect(inputFields.find('input[name="salaryCard"]').props().checked).toEqual(false)
        expect(inputFields.find('input[name="ages"]').props().value).toEqual(5)

        const submitButton = wrapper.find('button')
        submitButton.simulate('submit')
        wrapper.update()
        expect(wrapper.find(Field)).toHaveLength(10)
        expect(wrapper.find('Field[name="paymentPerMonth"]')).toEqual(expect.anything())
        expect(wrapper.find('Field[name="totalPrice"]')).toEqual(expect.anything())
        expect(wrapper.find('Field[name="overpayment"]')).toEqual(expect.anything())
        expect(wrapper.find('Field[name="percent"]')).toEqual(expect.anything())
        expect(wrapper.find('Field[name="minSalary"]')).toEqual(expect.anything())
    })
})
