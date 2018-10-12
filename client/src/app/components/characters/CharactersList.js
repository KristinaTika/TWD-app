import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters, handleErrors } from '../../action-creators/actions';
import Character from './Character';
import './CharacterList.css';
import Loader from '../../partials/Loader';
import PropTypes from 'prop-types';
import SearchBar from '../../partials/SearchBar';

class CharactersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: '',
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchCharacters();
    }

    handleSearch(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.searchValue);
        
    }

    render() {
        const { characters, error } = this.props;
        return (
            <div className="wrapper">
            <SearchBar handleSearch={this.handleSearch} handleSubmit={this.handleSubmit} searchValue={this.state.searchValue} />
                {
                   error ? error : !characters ? <Loader /> : characters.map((character, i) => <Character key={i} character={character} />)
                }
            </div>
        );
    }
}
CharactersList.propTypes = {
    fetchCharacters: PropTypes.func.isRequired,
    handleErrors: PropTypes.func.isRequired,
    characters: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchCharacters, handleErrors })(CharactersList);