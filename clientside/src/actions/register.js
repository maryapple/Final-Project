export const registerUser = user => {
    console.log(user)
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
                    console.log(data, 'owibka')
                    //Тут прописываем логику
                } else {
                    console.log('else', data)
                    // dispatch(loginUser(data.user))
                }
            })
    }
}
