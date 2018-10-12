import React from 'react';
import { Link } from 'react-router-dom';

const Episode = (props) => {

    const { ep, season, title, season_ep } = props.episode;
    return (
        <Link to={`/episodes/${ep}`}>
            {/* <p> </p> */}
            <li className="bold-title"> { title} (s{season} ep{season_ep})</li>
        </Link>
    );
};

export default Episode;