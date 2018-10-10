import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../action-creators/actions';
import Character from './Character';


class CharactersList extends Component {

    componentDidMount() {
        this.props.fetchCharacters();
    }

    render() {
        const { characters } = this.props;
        let displayCharacters = <div> loading ... </div>;
        if (characters.length === 0) {
            return displayCharacters;
        }
        displayCharacters = characters.map((char, i) => <Character key={i} character={char} />);
        return (
            <div>
                {displayCharacters}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps, { fetchCharacters })(CharactersList);