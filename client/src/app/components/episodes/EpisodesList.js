import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEpisodes, handleErrors } from '../../action-creators/actions';
import Loader from '../../partials/Loader';
import Episode from './Episode';
import PropTypes from 'prop-types';
import './EpisodesList.css';

class EpisodesList extends Component {

    componentDidMount() {
        this.props.fetchEpisodes();
    }

    render() {
        const { episodes, error } = this.props;
        return (
            <div className="wrapper">
                <ol>
                    {error ? error : !episodes ? <Loader /> : episodes.map((ep, i) => <Episode key={i} episode={ep} />)}
                </ol>
            </div>
        );
    }
}
EpisodesList.propTypes = {
    fetchEpisodes: PropTypes.func.isRequired,
    handleErrors: PropTypes.func.isRequired,
    episodes: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        episodes: state.episodes,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchEpisodes, handleErrors })(EpisodesList);