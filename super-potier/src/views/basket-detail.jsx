import React from 'react';
import { connect } from 'react-redux';
import List from '../components/list';

class BasketDetail extends React.Component {

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
export default connect((state = {}) => state, (dispatch, props) => Object.assign({}, props, {}))(BasketDetail);