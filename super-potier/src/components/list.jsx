import React from 'react';
import {connect} from 'react-redux';
import {getBooksActionCreator} from '../redux/actions.js';

class List extends React.Component {
    componentWillMount() {
        this
            .props
            .getBooksActionCreator();
    }
    render() {
        return (
            <div>
                <ul>
                    {this
                        .props
                        .books
                        .map((book, i) => <li key={i}>{book.title}</li>)}
                </ul>
            </div>
        )
    }
}
export default connect((state = {}) => state, (dispatch, props) => Object.assign({}, props, {
    getBooksActionCreator: getBooksActionCreator.bind(null, dispatch)
}))(List);