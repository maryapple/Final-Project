import React from 'react'
import { connect } from 'react-redux'

const Profile = (props) => {
    console.log(props)
    const {name, phone, registered, email} = props.currentUser
    return (
        <div className="profile-container">
            <h1>{name.first} {name.last}</h1>
            <div>Ваш телефон: {phone}</div>
            <div>Ваша почта: {email}</div>
            <div>Дата и время регистрации: {registered}</div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.login.currentUser
})

export default connect(mapStateToProps)(Profile)