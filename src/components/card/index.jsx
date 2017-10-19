import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import { addToBasketActionCreator, removeFromBasketActionCreator } from '../../redux/actions';
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
            .addToBasketActionCreator(book);
    }
    _removeFromBasket(e, book) {
        //avoid redirecting.
        e.preventDefault();
        this
            .props
            .removeFromBasketActionCreator(book);
    }
}

Card.propTypes = {
    addToBasketActionCreator: PropTypes.func.isRequired,
    removeFromBasketActionCreator: PropTypes.func.isRequired,
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
            addToBasketActionCreator: addToBasketActionCreator.bind(null, dispatch),
            removeFromBasketActionCreator: removeFromBasketActionCreator.bind(null, dispatch)
        })
)(Card);