import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <div id="search-bar">
            <form >
                <i className="fas fa-search"></i>
                <input type='search' value={props.searchValue} onChange={props.handleSearch} name='searchValue' />
            </form>
        </div>
    );
};

export default SearchBar;