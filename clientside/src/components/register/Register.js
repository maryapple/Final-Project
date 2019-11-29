import React from 'react'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import { registerUser } from '../../actions/register'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Register extends React.Component {
    onSubmit = values => {
        this.props.registerUser(values)
    }
    render () {
        return (this.props.registered && localStorage.token === undefined) ? <Redirect to="/login" /> : (
            <Styles>
                <h1>Регистрация</h1>
                <Form
                    onSubmit={this.onSubmit}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Имя</label>
                                <Field
                                    name="first"
                                    component="input"
                                    type="text"
                                    placeholder="Имя"
                                />
                            </div>
                            <div>
                                <label>Фамилия</label>
                                <Field
                                    name="last"
                                    component="input"
                                    type="text"
                                    placeholder="Фамилия"
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
                                <label>Пароль</label>
                                <Field
                                    name="password"
                                    component="input"
                                    type="password"
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
                        </form>
                    )}
                />
            </Styles>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.login.loggedIn,
        registered: state.login.registered
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (user) => dispatch(registerUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register) 