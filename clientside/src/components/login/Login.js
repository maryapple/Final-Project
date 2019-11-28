import React from 'react'
// import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import { loginUser } from '../../actions/login'
import {connect} from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

class LoginForm extends React.Component {
    onSubmit = values => {
        this.props.loginUser(values)
        console.log("---------PROPS", this.props)
        /* if ((!this.props.error) && (localStorage.getItem('token'))) {
            console.log(this.props.error)
            return (<Redirect to="/" />)
        }
        console.log(localStorage.token) */
    }

    render() {
        return (localStorage.getItem('token')) ? <Redirect to="/" /> : (
            <Styles>
            <h1>LOGIN</h1>
            <Link to="/register">
                <p>
                    Еще не зарегистированы?
                </p>
            </Link>
            <Form
                onSubmit={this.onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Логин</label>
                            <Field
                                name="email"
                                component="input"
                                type="text"
                                placeholder="Логин"
                            />
                        </div>
                        <div>
                            <label>Пароль</label>
                            <Field
                                name="password"
                                component="input"
                                type="text"
                                placeholder="Пароль"
                            />
                        </div>
                        
                        <div className="buttons">
                            <button type="submit" disabled={submitting || pristine}>
                                Войти
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
            </Styles >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.login.error,
        loggedIn: state.login.loggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (user) => dispatch(loginUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm) 