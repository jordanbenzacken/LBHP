import React from 'react';
import { removeFromBasketAction } from '../../redux/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import './line.css';

class Line extends React.Component {
    render() {
        const { book } = this.props;
        return (
            <div className='line'>
                <img src={book.cover} alt={book.title} />
                <div>{book.title}</div>
                <div className='action' onClick={(e) => this._removeFromBasket(e, book)}>
                    <div className='price'>{book.price} €</div>
                    <i className="material-icons">remove_shopping_cart</i>
                </div>
            </div>
        )
    }
    _removeFromBasket(e, book) {
        //avoid redirecting.
        e.preventDefault();
        this
            .props
            .removeFromBasketAction(book);
    }
}

Line.propTypes = {
    removeFromBasketAction: PropTypes.func.isRequired,
    book: PropTypes.object,
};
Line.defaultProps = {
    book: {}
};

export default connect(null, (dispatch, props) => Object.assign({}, props, {
    removeFromBasketAction: removeFromBasketAction.bind(null, dispatch)
}))(Line);