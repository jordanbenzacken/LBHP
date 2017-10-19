import React from 'react';
import { getBookDetailActionCreator, addToBasketActionCreator } from '../redux/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


class Detail extends React.Component {
    componentWillMount() {
        this
            .props
            .getBookDetailActionCreator(this.props.match.params.isbn);
    }
    render() {
        const { detail } = this.props;
        return (
            <div >
                {this._renderDetail(detail)}
            </div>
        )
    }
    _renderDetail(detail) {
        return (
            <div className='book-detail'>
                <div className='first-child'>
                    <div className='title'>
                        {detail.title}
                    </div>
                    <div className='cover'>
                        <img src={detail.cover} alt={detail.title} />
                    </div>
                </div>
                <div className='first-child'>
                    {this._renderDescription(detail.synopsis)}
                    {this._renderPrice(detail.price)}
                    <div onClick={() => this._addToBasket(detail)}>
                        <i className="material-icons">add_shopping_cart</i>
                    </div>
                </div>
            </div>
        )
    }
    _renderDescription(descriptionList) {
        return (
            <div className='description'>
                {descriptionList.map((description, i) => <p key={"synopsis-" + i}>{description}</p>)}
            </div>
        )
    }
    _renderPrice(price) {
        return (
            <div className='price'>{price + ' €'}</div>
        )
    }
    _addToBasket(detail) {
        this
            .props
            .addToBasketActionCreator(detail);
    }
}

Detail.propTypes = {
    getBookDetailActionCreator: PropTypes.func.isRequired,
    addToBasketActionCreator: PropTypes.func.isRequired,
    match: PropTypes.any
};

export default connect((state = {}) => {
    return {
        detail: state.detail || {
            synopsis: []
        }
    }
}, (dispatch, props) => Object.assign({}, props, {
    getBookDetailActionCreator: getBookDetailActionCreator.bind(null, dispatch),
    addToBasketActionCreator: addToBasketActionCreator.bind(null, dispatch)
}))(Detail);