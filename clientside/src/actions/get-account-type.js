import axios from 'axios'

const GET_ACCOUNTTYPE_REQUEST = 'GET_ACCOUNTTYPE_REQUEST'
const GET_ACCOUNTTYPE_SUCCESS = 'GET_ACCOUNTTYPE_SUCCESS'
const GET_ACCOUNTTYPE_FAIL = 'GET_ACCOUNTTYPE_FAIL'

const getAccountType = () => {
    return dispatch => {
        dispatch({
            type: GET_ACCOUNTTYPE_REQUEST
        })

        axios.get(`/api/account-types`)
            .then(res => {
                // console.log("------------card types api, res:", res.data)
                dispatch({
                    type: GET_ACCOUNTTYPE_SUCCESS,
                    payload: res.data
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_ACCOUNTTYPE_FAIL,
                    payload: error
                })
            })
    }
}

export default getAccountType