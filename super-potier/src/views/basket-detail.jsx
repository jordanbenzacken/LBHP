import React from 'react';
import { connect } from 'react-redux';
import List from '../components/list';
import { getCommercialOffers } from '../redux/actions.js';


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
        const { basket } = this.props;
        return (
            <div >
                {this._renderBasketDetail(basket)}
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

}
export default connect((state = {}) => state, (dispatch, props) => Object.assign({}, props, {
    getCommercialOffers: getCommercialOffers.bind(null, dispatch)
}))(BasketDetail);