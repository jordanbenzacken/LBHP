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
        return (
            <div></div>
        )
    }
}
export default connect((state = {}) => state, (dispatch, props) => Object.assign({}, props, {
    getBookDetailActionCreator: getBookDetailActionCreator.bind(null, dispatch)
}))(Detail);