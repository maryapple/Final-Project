import React from 'react'
import { connect } from 'react-redux'
import './Profile.css'

const Profile = (props) => {
    const {name, phone, registered, email} = props.currentUser
    return (
        <div className="profile-container">
            <h1>Личная информация</h1>
            <h2>{name.first} {name.last}</h2>
            <div><span className="topic-info">Ваш телефон:</span> {phone}</div>
            <div><span className="topic-info">Ваша почта:</span> {email}</div>
            <div><span className="topic-info">Дата регистрации:</span>{registered.slice(0, 10)}</div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.login.currentUser
})

export default connect(mapStateToProps)(Profile)