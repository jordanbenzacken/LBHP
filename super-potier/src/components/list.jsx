import React from 'react';
import {connect} from 'react-redux';
import {getBooksActionCreator} from '../redux/actions.js';
import Card from './card'

class List extends React.Component {
    componentWillMount() {
        this
            .props
            .getBooksActionCreator();
    }
    render() {
        return (
            <div className='list'>
                {this
                    .props
                    .books
                    .map((book, i) => <Card key={i} book={book}/>)}
            </div>
        )
    }
}
export default connect((state = {}) => state, (dispatch, props) => Object.assign({}, props, {
    getBooksActionCreator: getBooksActionCreator.bind(null, dispatch)
}))(List);