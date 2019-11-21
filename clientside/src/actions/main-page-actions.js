const GET_DATA_REQUEST = 'GET_DATA_REQUEST'
const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
const GET_DATA_FAIL = 'GET_DATA_FAIL'

const getUserData = () => {
    return dispatch => {
        dispatch({
            type: GET_DATA_REQUEST
        })

        axios.get(`/api/users/${currentId}`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_DATA_SUCCESS,
                    payload: data
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

export default getUserData
