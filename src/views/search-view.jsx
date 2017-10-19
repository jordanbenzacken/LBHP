import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getBooksAction } from '../redux/actions.js';
import List from '../components/list';
import FilterBook from '../components/filter'

class SearchView extends React.Component {
    componentWillMount() {
        this
            .props
            .getBooksAction();
    }
    render() {
        return (
            <div>
                <FilterBook />
                <List mosaic books={this.props.filteredBooks} />
            </div>
        )
    }
}
SearchView.propTypes = {
    getBooksAction: PropTypes.func.isRequired
};

export default connect((state = {}) => {
    return {
        filteredBooks: state.filteredBooks || []
    }
}, (dispatch, props) => Object.assign({}, props, {
    getBooksAction: getBooksAction.bind(null, dispatch)
}))(SearchView);