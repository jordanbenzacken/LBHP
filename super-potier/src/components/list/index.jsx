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
                    .map((book, i) => {
                        if (this.props.mosaic) {
                            return < Card key={i} book={book} />
                        } else {
                            return < Line key={i} book={book} />
                        }
                    })
                }
            </div>
        )
    }
}

List.propTypes = {
    key: PropTypes.number,
    book: PropTypes.array
};

export default List;