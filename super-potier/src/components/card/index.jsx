import React from 'react';
import './card.css';
import {Link} from 'react-router-dom'

class Card extends React.Component {
    render() {
        const {book, key} = this.props;
        return (
            <div className='card' key={key}>
                <Link to={"/detail/" + book.isbn}>
                    <img src={book.cover} alt={book.title}/>
                    <div>{book.title}</div>
                </Link>
            </div>
        )
    }
}
export default Card;