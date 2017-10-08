import React from 'react';
import {connect} from 'react-redux';
import {getBooksActionCreator} from '../redux/actions.js';
import List from '../components/list';
import FilterBook from '../components/filter'

class SearchView extends React.Component {
    componentWillMount() {
        this
            .props
            .getBooksActionCreator();
    }
    render() {
        return (
            <div>
                <FilterBook/>
                <List books={this.props.filteredBooks || []}/>
            </div>
        )
    }
}
export default connect((state = {}) => state, (dispatch, props) => Object.assign({}, props, {
    getBooksActionCreator: getBooksActionCreator.bind(null, dispatch)
}))(SearchView);