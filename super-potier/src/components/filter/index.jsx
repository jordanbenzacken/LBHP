import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux';
import {filterBooksActionCreator} from '../../redux/actions.js';
import './filter.css';

class FilterBook extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className='filter'>
                <MuiThemeProvider>
                    <TextField
                        hintText="Search by book, reference, ..."
                        onChange={this
                        ._onChange
                        .bind(this)}/>
                </MuiThemeProvider>
            </div>
        )
    }
    _onChange(event, inputValue) {
        this
            .props
            .filterBooksActionCreator(inputValue);
    }
}

export default connect((state = {}) => state, (dispatch, props) => Object.assign({}, props, {
    filterBooksActionCreator: filterBooksActionCreator.bind(null, dispatch)
}))(FilterBook);