import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters, handleErrors } from '../../action-creators/actions';
import Character from './Character';
import './CharacterList.css';
import Loader from '../../partials/Loader';

class CharactersList extends Component {

    componentDidMount() {
        this.props.fetchCharacters();
    }

    render() {
        const { characters, error } = this.props;
        return (
            <div className="wrapper">
                {
                   error ? error : !characters ? <Loader /> : characters.map((character, i) => <Character key={i} character={character} />)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchCharacters, handleErrors })(CharactersList);