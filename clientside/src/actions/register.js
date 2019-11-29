const REGISTER_USER = 'REGISTER_USER'

export const registerUser = user => {
    return dispatch => {
        return fetch("/api/auth/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ user })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {
                    console.log("error", data)
                } 
                else {
                    dispatch({
                        type: REGISTER_USER,
                        payload: data.user
                    })
                }
            })
    }
}
