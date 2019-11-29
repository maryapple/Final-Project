import axios from 'axios'

const GET_DATA_ACCOUNT_REQUEST = 'GET_DATA_ACCOUNT_REQUEST'
const GET_DATA_ACCOUNT_SUCCESS = 'GET_DATA_ACCOUNT_SUCCESS'
const GET_DATA_ACCOUNT_FAIL = 'GET_DATA_ACCOUNT_FAIL'

const getAccount = (currentId) => {
    return dispatch => {
        dispatch({
            type: GET_DATA_ACCOUNT_REQUEST
        })

        axios.get(`/api/accounts/${currentId}`)
            .then(data => {
                dispatch({
                    type: GET_DATA_ACCOUNT_SUCCESS,
                    payload: data.data
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_DATA_ACCOUNT_FAIL,
                    payload: error
                })
            })
    }
}

export default getAccount