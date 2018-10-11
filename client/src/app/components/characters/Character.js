import React from 'react';
import { Link } from 'react-router-dom';

const Character = (props) => {
  
    const { id, name, photo } = props.character;
    
    return (
        <Link to={`/characters/${id}`}>
            <li>
                <div>
                    <img src={photo} alt={name} />
                </div>
                <p> {name} </p>
            </li>
        </Link>
    );
};

export default Character;