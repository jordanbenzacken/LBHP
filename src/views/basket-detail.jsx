import React from 'react';
import { connect } from 'react-redux';
import List from '../components/list';
import { getCommercialOffers } from '../redux/actions.js';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
            <div className='basket-detail'>
                {this._renderBasketDetail(basket)}
                {this._renderOffer(commercialOffers.offers, commercialOffers.totalBrut)}
            </div>
        )
    }
    _renderBasketDetail(basket) {
        return (
            <div className='detail'>
                <List books={basket} />
            </div>
        )
    }
    _renderOffer(offers, totalBrut) {
        let percentage, minus, slice, sliceValue;
        offers.forEach(offer => {
            if (offer.type === 'percentage') {
                percentage = offer.value;
            } else if (offer.type === 'minus') {
                minus = offer.value;
            } else if (offer.type === 'slice') {
                slice = offer.value;
                sliceValue = offer.sliceValue;
            }
        })
        const promotion = totalBrut && minus && (minus + (Math.trunc(totalBrut / (sliceValue)) * slice));
        return (
            <div className='offers'>
                {minus &&
                    <div>-{percentage}% on your total order
                {minus &&
                            <span>( -{minus}€ )</span>}
                    </div>}
                {minus &&
                    <div>In addition, there is a {slice}€ discount every {sliceValue}€ ordered
                    </div>}

                {minus &&
                    <div>So you will pay {totalBrut} - {promotion} = {totalBrut - promotion}€
                    </div>}
                {this.props.basket.length > 0 && <MuiThemeProvider>
                    <RaisedButton label="Order" onClick={() => alert('Thanks, your books will be sent very soon')} />
                </MuiThemeProvider>}
            </div >
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