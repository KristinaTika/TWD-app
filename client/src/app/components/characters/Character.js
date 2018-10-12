import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Character.css';

const Character = (props) => {
  
    const { name, photo, status } = props.character;
    
    return (
        <Link to={`/characters/${name}`}>
            <li>
                <div>
                    <img src={photo} alt={name} />
                </div>
                <p className={status.alive !== "" ? 'green' : status.dead !== "" ? 'red' : 'blue'}> {name} </p>
            </li>
        </Link>
    );
};
Character.propTypes = {
    character: PropTypes.object.isRequired
}

export default Character;