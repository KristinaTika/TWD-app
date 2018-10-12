import React from 'react';

const SearchBar = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type='search' value={props.searchValue} onChange={props.handleSearch} name='searchValue' />
            </form>
        </div>
    );
};

export default SearchBar;