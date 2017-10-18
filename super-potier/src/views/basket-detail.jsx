import React from 'react';
import { connect } from 'react-redux';
import List from '../components/list';
import { getCommercialOffers } from '../redux/actions.js';
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
        console.log(this.props);
        const { basket, commercialOffers } = this.props;
        return (
            <div >
                {this._renderBasketDetail(basket)}
                {commercialOffers && this._renderOffers(commercialOffers.offers)}
            </div>
        )
    }
    _renderBasketDetail(basket) {
        if (basket) {
            return (
                <div className='basket-detail'>
                    <List books={basket} />
                </div>
            )
        }
    }
    _renderOffers(offers) {
        if (offers) {
            const percentage = offers.find((offer) => offer.type === 'percentage');
            const minus = offers.find((offer) => offer.type === 'minus');
            const slice = offers.find((offer) => offer.type === 'slice');
            return (
                <div className='offers'>
                    <div>{percentage.value}%</div>
                    <div>{minus.value}€</div>
                    <div>{slice.value}€</div>
                    <div>/{slice.sliceValue}€</div>
                </div>
            )
        }
    }

}
export default connect((state = {}) => state, (dispatch, props) => Object.assign({}, props, {
    getCommercialOffers: getCommercialOffers.bind(null, dispatch)
}))(BasketDetail);