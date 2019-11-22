import React from 'react'
import { connect } from 'react-redux'
import { getCard } from '../../actions/main-page-actions'

class Card extends React.Component {

    a = () => {
        console.log('klkl')
    }
    componentDidMount() {
        console.log(this.props)
        getCard(this.props)
    }

    renderCard = () => {
        return (<div>Карта №{this.props.number}</div>)
    }

    render() {
        if (this.props.loading) {
            return (<div>загрузка</div>)
        }
        return this.renderCard()
    }
}

const mapStateToProps = (store) => {
    return {
        users: store.userInfo.data,
        loading: store.userInfo.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCard: (cardId) => dispatch(getCard(cardId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
