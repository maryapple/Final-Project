import React from 'react'
import { connect } from 'react-redux'
import { getCard } from '../../actions/main-page-actions'

class Card extends React.Component {
    componentDidMount() {
        console.log("this.props old", this.props)
        console.log("this.props id card", this.props.cardId)
        getCard(this.props.cardId)
    }

    renderCard = () => {
        const {number} = this.props.cards
        console.log(this.props.cards)
        return <div>
            Карта №{number}
        </div>
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
        loading: store.cardInfo.isLoading,
        cards: store.cardInfo.cardInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCard: (cardId) => dispatch(getCard(cardId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
