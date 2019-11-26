export const loginUser = user => {
    console.log('USER', user)
    // const token = localStorage.token
    return dispatch => {
        return fetch("/api/auth/login", {
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
                    console.log('login data', data)
                    // localStorage.setItem("token", data)
                    dispatch(loginUser(data.user))
                }
            })
    }
}
