import React from 'react';
import { Link } from 'react-router-dom';
import './ComicItem.css';

const ComicItem = (props) => {

    const { id, title, volume, photo, } = props.comic;
    return (
        <Link to={`/comics/${id}`}>
            <li>
                <div>
                    <img src={photo} alt={title} />
                </div>
                <p>Volume {volume}: {title} </p>
            </li>
        </Link>
    );
};

export default ComicItem;