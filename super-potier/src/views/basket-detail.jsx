import React from 'react';
import {connect} from 'react-redux';

class BasketDetail extends React.Component {

    render() {
        console.log(this.props);
        const {basket} = this.props;
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
                    {basket.map((book, i) => <div key={i}>{book.title}</div>)}
                </div>
            )
        }
    }

}
export default connect((state = {}) => state, (dispatch, props) => Object.assign({}, props, {}))(BasketDetail);