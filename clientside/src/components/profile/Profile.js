import React from 'react'
import { connect } from 'react-redux'
import './Profile.css'

const Profile = (props) => {
    console.log(props)
    const {name, phone, registered, email} = props.currentUser
    console.log(typeof registered)
    return (
        <div className="profile-container">
            <h1>Личная информация</h1>
            <h2>{name.first} {name.last}</h2>
            <div><span class="topic-info">Ваш телефон:</span> {phone}</div>
            <div><span class="topic-info">Ваша почта:</span> {email}</div>
            <div><span class="topic-info">Дата регистрации:</span>{registered.slice(0, 10)}</div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.login.currentUser
})

export default connect(mapStateToProps)(Profile)