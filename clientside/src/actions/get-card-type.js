import axios from 'axios'

const GET_CARDTYPE_REQUEST = 'GET_CARDTYPE_REQUEST'
const GET_CARDTYPE_SUCCESS = 'GET_CARDTYPE_SUCCESS'
const GET_CARDTYPE_FAIL = 'GET_CARDTYPE_FAIL'

const getCardType = () => {
    return dispatch => {
        dispatch({
            type: GET_CARDTYPE_REQUEST
        })

        axios.get(`/api/card-types`)
            .then(res => {
                dispatch({
                    type: GET_CARDTYPE_SUCCESS,
                    payload: res.data
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_CARDTYPE_FAIL,
                    payload: error
                })
            })
    }
}

export default getCardType