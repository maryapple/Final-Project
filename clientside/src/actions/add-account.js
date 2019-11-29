import axios from 'axios'

const ADD_DATA_ACCOUNT_REQUEST = 'ADD_DATA_ACCOUNT_REQUEST'
const ADD_DATA_ACCOUNT_SUCCESS = 'ADD_DATA_ACCOUNT_SUCCESS'
const ADD_DATA_ACCOUNT_FAIL = 'ADD_DATA_ACCOUNT_FAIL'

const addAccount = (currentId, account) => {
    return dispatch => {
        dispatch({
            type: ADD_DATA_ACCOUNT_REQUEST
        })

        axios.put(`/api/users/${currentId}`, account)
            .then(data => {
                dispatch({
                    type: ADD_DATA_ACCOUNT_SUCCESS,
                    payload: data.account
                })
            })
            .catch(error => {
                dispatch({
                    type: ADD_DATA_ACCOUNT_FAIL,
                    payload: error
                })
            })
    }
}

export default addAccount