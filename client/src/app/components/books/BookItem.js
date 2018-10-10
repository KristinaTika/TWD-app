import React from 'react';
import { Link } from 'react-router-dom';
import './BookItem.css';

const BookItem = (props) => {
    const {name, photo, published, id } = props.book;
    console.log(id);
    return (
        <li>
            <div>
                <img src={photo} alt={name} />
            </div>
            <Link to={`/books/${id}`}> {name} ({published}) </Link>
        </li>
    );
};

export default BookItem;