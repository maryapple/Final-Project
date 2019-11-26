/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import { registerUser } from '../../actions/register'
import { connect } from 'react-redux'

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class Register extends React.Component {
    onSubmit = values => {
        // await sleep(300)
        // window.alert(JSON.stringify(values, 0, 2))
        console.log(values)
        this.props.registerUser(values)
    }
    render () {
        return (
            <Styles>
                <h1>Регистрация</h1>
                <Form
                    onSubmit={this.onSubmit}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            {/* <div>
                                <label>Тайтл</label>
                                <Field
                                    name="title"
                                    component="input"
                                    type="text"
                                    placeholder="Mr/Ms"
                                />
                            </div>
                            <div>
                                <label>Имя</label>
                                <Field
                                    name="firstName"
                                    component="input"
                                    type="text"
                                    placeholder="First Name"
                                />
                            </div>
                            <div>
                                <label>Фамилия</label>
                                <Field
                                    name="lastName"
                                    component="input"
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </div> */}
                            <div>
                                <label>Пол</label>
                                <Field
                                    name="gender"
                                    component="input"
                                    type="text"
                                    placeholder="Пол"
                                />
                            </div>
                            <div>
                                <label>Почта</label>
                                <Field
                                    name="email"
                                    component="input"
                                    type="text"
                                    placeholder="Почта"
                                />
                            </div>
                            <div>
                                <label>Телефон</label>
                                <Field
                                    name="phone"
                                    component="input"
                                    type="text"
                                    placeholder="Телефон"
                                />
                            </div>
                            <div>
                                <label>Пароля</label>
                                <Field
                                    name="password"
                                    component="input"
                                    type="text"
                                    placeholder="Пароль"
                                />
                            </div>
                            <div className="buttons">
                                <button type="submit" disabled={submitting || pristine}>
                                    Отправить
                                </button>
                                <button
                                    type="button"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                >
                                    Очистить
                                </button>
                            </div>

                            {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                        </form>
                    )}
                />
            </Styles>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (user) => dispatch(registerUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Register) 