import React from 'react';
import './card.css';
import {Link} from 'react-router-dom';
import {addToBasketActionCreator} from '../../redux/actions';
import {connect} from 'react-redux';

class Card extends React.Component {
    render() {
        const {book, key} = this.props;
        return (
            <div className='card' key={key}>
                <Link to={"/detail/" + book.isbn}>
                    <img src={book.cover} alt={book.title}/>
                    <div onClick={(e) => this._addToBasket(e, book)}>
                        <i className="material-icons">add_shopping_cart</i>
                    </div>
                    <div>{book.title}</div>
                </Link>
            </div>
        )
    }
    _addToBasket(e, book) {
        //avoid redirect.
        e.preventDefault();
        this
            .props
            .addToBasketActionCreator(book);
    }
}
export default connect((state = {}) => state, (dispatch, props) => Object.assign({}, props, {
    addToBasketActionCreator: addToBasketActionCreator.bind(null, dispatch)
}))(Card);