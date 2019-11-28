import React from 'react'
import { connect } from 'react-redux'
import './NewCard.css'
import getCardType from '../../actions/get-card-type'
import CardItem from './CardItem'

class NewCard extends React.Component {

    componentDidMount () {
        this.props.getCards()
        // console.log("----card types props", this.props)
    }

/*     handleClick = (e) => {
        console.log(e.type)
    } */

    renderCards = () => {
        const { cards } = this.props
        const cardItems = cards.map(elem => {
            return <CardItem
                image={elem.image}
                name={elem.name}
                type={elem.type}
                cashback={elem.cashback}
                cost={elem.cost}
                system={elem.system}
                key={elem.id}
                // onClick={this.handleClick}
            />
        })

        return (
            <div className="new-card-container">
                <h1>Заказать новую карту</h1>
                <div className="cards-grid">
                    {cardItems}
                </div>
            </div>
        )
    }

    render () {
        if (this.props.loading) {
            return (<div>Загрузка</div>)
        }
        return this.renderCards()
    }
}

const mapStateToProps = (store) => {
    return {
        cards: store.cardTypes.data,
        loading: store.cardTypes.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCards: () => dispatch(getCardType())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCard)