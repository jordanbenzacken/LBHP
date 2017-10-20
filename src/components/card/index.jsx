import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import { addToBasketAction, removeFromBasketAction } from '../../redux/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class Card extends React.Component {
    render() {
        const { book, basket } = this.props;
        return (
            <div className='card'>
                <Link to={"/detail/" + book.isbn}>
                    <div className='title'>{book.title}</div>
                    <img src={book.cover} alt={book.title} />
                    <div className='action'>
                        {this._renderAction(book, basket)}
                    </div>
                </Link>
            </div>
        )
    }
    _renderAction(book, basket) {
        if (basket.map(book => book.isbn).includes(book.isbn)) {
            return (
                <div onClick={(e) => this._removeFromBasket(e, book)}>
                    <i className="material-icons">remove_shopping_cart</i>
                </div>
            )
        } else {
            return (
                <div onClick={(e) => this._addToBasket(e, book)}>
                    <i className="material-icons">add_shopping_cart</i>
                    <div className='price'>{book.price} €</div>
                </div>
            )
        }
    }
    _addToBasket(e, book) {
        //avoid redirecting.
        e.preventDefault();
        this
            .props
            .addToBasketAction(book);
    }
    _removeFromBasket(e, book) {
        //avoid redirecting.
        e.preventDefault();
        this
            .props
            .removeFromBasketAction(book);
    }
}

Card.propTypes = {
    addToBasketAction: PropTypes.func.isRequired,
    removeFromBasketAction: PropTypes.func.isRequired,
    book: PropTypes.object,
    basket: PropTypes.array
};

export default connect(
    (state = {}) => {
        return {
            book: state.book || {},
            basket: state.basket || []
        }
    },
    (dispatch, props) => Object.assign({},
        props,
        {
            addToBasketAction: addToBasketAction.bind(null, dispatch),
            removeFromBasketAction: removeFromBasketAction.bind(null, dispatch)
        })
)(Card);