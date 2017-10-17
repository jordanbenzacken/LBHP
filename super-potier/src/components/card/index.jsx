import React from 'react';
import './card.css';
import {Link} from 'react-router-dom';
import {addToBasketActionCreator, removeFromBasketActionCreator} from '../../redux/actions';
import {connect} from 'react-redux';

class Card extends React.Component {
    render() {
        const {book, key, basket} = this.props;
        return (
            <div className='card' key={key}>
                <Link to={"/detail/" + book.isbn}>
                    <img src={book.cover} alt={book.title}/> {this._renderAction(book, basket)}
                    <div>{book.title}</div>
                </Link>
            </div>
        )
    }
    _renderAction(book, basket) {
        if (basket && basket.map(book => book.isbn).includes(book.isbn)) {
            return (
                <div onClick={(e) => this._removeFromBasket(e, book)}>
                    <i className="material-icons">remove_shopping_cart</i>
                </div>
            )
        } else {
            return (
                <div onClick={(e) => this._addToBasket(e, book)}>
                    <i className="material-icons">add_shopping_cart</i>
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
export default connect((state = {}) => state, (dispatch, props) => Object.assign({}, props, {
    addToBasketActionCreator: addToBasketActionCreator.bind(null, dispatch),
    removeFromBasketActionCreator: removeFromBasketActionCreator.bind(null, dispatch)
}))(Card);