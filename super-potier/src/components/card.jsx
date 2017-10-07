import React from 'react';

class Card extends React.Component {
    render() {
        const {book, key} = this.props;
        return (
            <div className='card' key={key}>
                <img src={book.cover} alt={book.title}/>
                <div>{book.title}</div>
            </div>
        )
    }
}
export default Card;