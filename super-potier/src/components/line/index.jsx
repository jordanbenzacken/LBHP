import React from 'react';
import { Link } from 'react-router-dom';
import { removeFromBasketActionCreator } from '../../redux/actions';
import { connect } from 'react-redux';
import './line.css';

class Line extends React.Component {
    render() {
        const { book, key, basket } = this.props;
        return (
            <div className='line' key={key}>
                <div onClick={(e) => this._removeFromBasket(e, book)}>
                    <i className="material-icons">remove_shopping_cart</i>
                </div>
                <img src={book.cover} alt={book.title} />
                <div>{book.title}</div>
            </div>
        )
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
    removeFromBasketActionCreator: removeFromBasketActionCreator.bind(null, dispatch)
}))(Line);