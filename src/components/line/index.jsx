import React from 'react';
import { removeFromBasketActionCreator } from '../../redux/actions';
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
            .removeFromBasketActionCreator(book);
    }
}

Line.propTypes = {
    removeFromBasketActionCreator: PropTypes.func.isRequired,
    book: PropTypes.object,
};
Line.defaultProps = {
    book: {}
};

export default connect(null, (dispatch, props) => Object.assign({}, props, {
    removeFromBasketActionCreator: removeFromBasketActionCreator.bind(null, dispatch)
}))(Line);