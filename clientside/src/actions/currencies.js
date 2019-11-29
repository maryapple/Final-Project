import axios from 'axios'

const GET_DATA_CURRENCIES_REQUEST = 'GET_DATA_CURRENCIES_REQUEST'
const GET_DATA_CURRENCIES_SUCCESS = 'GET_DATA_CURRENCIES_SUCCESS'
const GET_DATA_CURRENCIES_FAIL = 'GET_DATA_CURRENCIES_FAIL'

const getExchangeRate = () => {
    return dispatch => {
        dispatch({
            type: GET_DATA_CURRENCIES_REQUEST
        })

        axios.get(`https://api.exchangerate-api.com/v4/latest/RUB`)
            .then(res => {
                dispatch({
                    type: GET_DATA_CURRENCIES_SUCCESS,
                    payload: res.data.rates
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_DATA_CURRENCIES_FAIL,
                    payload: error
                })
            })
    }
}

export default getExchangeRate