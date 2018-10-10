import React from 'react';
import { Link } from 'react-router-dom';
import './Partials.css';


const Header = (props) => {
    return (
        <header>
            <h2> TWD App </h2>
            <nav>
                <Link to="/books"> Books </Link>
                <Link to="/books"> Books </Link>
            </nav>
        </header>
    );
};

export default Header;