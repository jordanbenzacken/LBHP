import React from 'react';
import {connect} from 'react-redux';
import {getBooksActionCreator} from '../redux/actions.js';
import List from '../components/list'

class SearchView extends React.Component {
    componentWillMount() {
        this
            .props
            .getBooksActionCreator();
    }
    render() {
        return (<List books={this.props.books}/>)
    }
}
export default connect((state = {}) => state, (dispatch, props) => Object.assign({}, props, {
    getBooksActionCreator: getBooksActionCreator.bind(null, dispatch)
}))(SearchView);