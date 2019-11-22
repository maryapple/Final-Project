import axios from 'axios'

const GET_DATA_REQUEST = 'GET_DATA_REQUEST'
const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
const GET_DATA_FAIL = 'GET_DATA_FAIL'

// Action Creators
const getUserData = (currentId) => {
    return dispatch => {
        dispatch({
            type: GET_DATA_REQUEST
        })

        axios.get(`/api/users/${currentId}`)
            .then(data => {
                dispatch({
                    type: GET_DATA_SUCCESS,
                    payload: data.data
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_DATA_FAIL,
                    payload: error
                })
            })
    }
}

const GET_DATA_CARD_REQUEST = 'GET_DATA_CARD_REQUEST'
const GET_DATA_CARD_SUCCESS = 'GET_DATA_CARD_SUCCESS'
const GET_DATA_CARD_FAIL = 'GET_DATA_CARD_FAIL'

const getCard = (currentId) => {
    return dispatch => {
        dispatch({
            type: GET_DATA_CARD_REQUEST
        })

        axios.get(`/api/cards/${currentId}`)
            .then(data => {
                dispatch({
                    type: GET_DATA_CARD_SUCCESS,
                    payload: data.cardInfo
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_DATA_CARD_FAIL,
                    payload: error
                })
            })
    }
}

export {
    getUserData,
    getCard
}