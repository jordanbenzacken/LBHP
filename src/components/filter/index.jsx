import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { filterBooksAction } from '../../redux/actions.js';
import './filter.css';

class FilterBook extends React.Component {
    render() {
        return (
            <div className='filter'>
                <MuiThemeProvider>
                    <TextField
                        hintText="Search by book, reference, ..."
                        onChange={this._onChange.bind(this)} />
                </MuiThemeProvider>
            </div>
        )
    }
    _onChange(event, inputValue) {
        this.props.filterBooksAction(inputValue);
    }
}

export default connect(null, (dispatch, props) => Object.assign({}, props, {
    filterBooksAction: filterBooksAction.bind(null, dispatch)
}))(FilterBook);