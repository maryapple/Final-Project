import React from 'react'
import { connect } from 'react-redux'
import getCard from '../../actions/card-info'

class Card extends React.Component {
    componentDidMount() {
        this.props.getCard(this.props.cardId)
    }

    renderCard = () => {
        
        const {number} = this.props.cards
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
