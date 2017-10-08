import React from 'react';
import Card from '../card';
import './list.css';

class List extends React.Component {
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
export default List;