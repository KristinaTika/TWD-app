import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleCharacter } from '../../action-creators/actions';


class SingleCharacter extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchSingleCharacter(id);
    }

    render() {
        const character = this.props.character;
        console.log(character)
        let renderCharacter = <div> loading... </div>
        if(!character) {
            return renderCharacter;
        }
        return (
            <div>
                <h1> {character[0].name} </h1>
                <div>
                    <img src={character[0].photo} alt={character[0].name} />
                </div>
                <p> {character[0].description} </p>
            </div>
        );
    }
}

const mapStateToProp = (state) => {
    return {
        character: state.character
    }
}

export default connect(mapStateToProp, { fetchSingleCharacter })(SingleCharacter);