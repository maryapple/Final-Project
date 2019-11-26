import React from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import { loginUser } from '../../actions/login'
import {connect} from 'react-redux'

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class LoginForm extends React.Component {
    state = {
        count: 0
    }
    onSubmit = values => {
        this.setState({
            count : this.state.count+1
        })
        // await sleep(300)
        // console.log(values)
        this.props.loginUser(values)
        console.log(this.state.count)
    }
    render() {
        return (
            <Styles>
            <h1>LOGIN</h1>
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

                        {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                    </form>
                )}
            />
            </Styles >
            
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (user) => dispatch(loginUser(user))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm) 