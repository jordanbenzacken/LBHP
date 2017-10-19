import React from 'react';
import { connect } from 'react-redux';
import List from '../components/list';
import { getCommercialOffers } from '../redux/actions.js';
import PropTypes from 'prop-types'
import '../styles/basket-detail.css'


class BasketDetail extends React.Component {
    componentWillMount() {
        this._getCommercialOffers();
    }
    componentWillReceiveProps(nProps) {
        if (this.props.basket.length !== nProps.basket.length) {
            this._getCommercialOffers();
        }
    }
    _getCommercialOffers() {
        const { getCommercialOffers, basket } = this.props;
        getCommercialOffers(basket.map(book => book.isbn));
    }
    render() {
        const { basket, commercialOffers } = this.props;
        return (
            <div >
                {this._renderBasketDetail(basket)}
                {this._renderOffers(commercialOffers.offers)}
            </div>
        )
    }
    _renderBasketDetail(basket) {
        return (
            <div className='basket-detail'>
                <List books={basket} />
            </div>
        )
    }
    _renderOffers(offers) {
        const percentage = offers.find((offer) => offer.type === 'percentage');
        const minus = offers.find((offer) => offer.type === 'minus');
        const slice = offers.find((offer) => offer.type === 'slice');
        return (
            <div className='offers'>
                <div>{percentage && percentage.value}%</div>
                {minus && <div>{minus.value}€</div>}
                {slice && <div>{slice.value}€</div>}
                {slice && <div>/{slice.sliceValue}€</div>}
            </div>
        )
    }
}

BasketDetail.propTypes = {
    getCommercialOffers: PropTypes.func.isRequired,
    basket: PropTypes.array,
    commercialOffers: PropTypes.object
};

export default connect((state = {}) => {
    return {
        basket: state.basket || [],
        commercialOffers: state.commercialOffers || {
            offers: []
        }
    }
}, (dispatch, props) => Object.assign({}, props, {
    getCommercialOffers: getCommercialOffers.bind(null, dispatch)
}))(BasketDetail);