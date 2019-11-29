import axios from 'axios'

const ADD_DATA_CARD_REQUEST = 'ADD_DATA_CARD_REQUEST'
const ADD_DATA_CARD_SUCCESS = 'ADD_DATA_CARD_SUCCESS'
const ADD_DATA_CARD_FAIL = 'ADD_DATA_CARD_FAIL'

const addCard = (currentId, card) => {
    return dispatch => {
        dispatch({
            type: ADD_DATA_CARD_REQUEST
        })

        axios.patch(`/api/users/${currentId}`, card)
            .then(data => {
                console.log("ADD CARD", card)
                dispatch({
                    type: ADD_DATA_CARD_SUCCESS,
                    payload: data.card
                })
            })
            .catch(error => {
                dispatch({
                    type: ADD_DATA_CARD_FAIL,
                    payload: error
                })
            })
        /* return fetch(`/api/users/${currentId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ card })
        })
            .then(resp => resp.json())
            .then(data => {
                console.log('here')
                if (data.message) {
                    console.log(data, 'ОШИБКА')
                }
                else {
                    console.log('все ок, data:', data)
                    dispatch({
                        type: ADD_DATA_CARD_SUCCESS,
                        payload: data.card
                    })
                }
            }) */
    }
}

export default addCard