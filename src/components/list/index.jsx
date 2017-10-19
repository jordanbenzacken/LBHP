import React from 'react';
import Card from '../card';
import Line from '../line';
import PropTypes from 'prop-types';
import './list.css';

class List extends React.Component {
    render() {
        const styleClass = this.props.mosaic ? 'list-wrap' : 'list';
        return (
            <div className={styleClass}>
                {this
                    .props
                    .books
                    .map((book) => {
                        if (this.props.mosaic) {
                            return < Card book={book} key={book.isbn} />
                        } else {
                            return < Line book={book} key={book.isbn} />
                        }
                    })
                }
            </div>
        )
    }
}

List.propTypes = {
    book: PropTypes.array
};
List.defaultProps = {
    books: []
};

export default List;