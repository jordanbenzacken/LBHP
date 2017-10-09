import React from 'react';
import {getBookDetailActionCreator} from '../redux/actions';
import {connect} from 'react-redux';

class Detail extends React.Component {
    componentWillMount() {
        this
            .props
            .getBookDetailActionCreator(this.props.match.params.isbn);
    }
    render() {
        console.log(this.props);
        const {detail} = this.props;
        return (
            <div >
                {this._renderDetail(detail)}
            </div>
        )
    }
    _renderDetail(detail) {
        if (detail) {
            return (
                <div className='book-detail'>
                    <div className='first-child'>
                        <div className='title'>
                            {detail.title}
                        </div>
                        <div className='cover'>
                            <img src={detail.cover} alt={detail.title}/>
                        </div>
                    </div>
                    <div className='first-child'>
                        {this._renderDescription(detail.synopsis)}
                        {this._renderPrice(detail.price)}
                    </div>
                </div>
            )
        }
    }
    _renderDescription(descriptionList) {
        return (
            <div className='description'>{descriptionList.map((description, i) => <p key={"synopsis-" + i}>{description}</p>)}</div>
        )
    }
    _renderPrice(price) {
        return (
            <div className='price'>{price + ' $'}</div>
        )
    }
}
export default connect((state = {}) => state, (dispatch, props) => Object.assign({}, props, {
    getBookDetailActionCreator: getBookDetailActionCreator.bind(null, dispatch)
}))(Detail);