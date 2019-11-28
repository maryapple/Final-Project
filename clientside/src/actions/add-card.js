import axios from 'axios'

const ADD_DATA_CARD_REQUEST = 'ADD_DATA_CARD_REQUEST'
const ADD_DATA_CARD_SUCCESS = 'ADD_DATA_CARD_SUCCESS'
const ADD_DATA_CARD_FAIL = 'ADD_DATA_CARD_FAIL'

const addCard = (currentId) => {
    return dispatch => {
        dispatch({
            type: ADD_DATA_CARD_REQUEST
        })

        axios.patch(`/api/users/${currentId}`)
            .then(data => {
                console.log("ADD CARD", data)
                dispatch({
                    type: ADD_DATA_CARD_SUCCESS,
                    payload: data.data
                })
            })
            .catch(error => {
                dispatch({
                    type: ADD_DATA_CARD_FAIL,
                    payload: error
                })
            })
    }
}

export default addCard