import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEpisodes, handleErrors } from '../../action-creators/actions';
import Loader from '../../partials/Loader';
import Episode from './Episode';

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

const mapStateToProps = (state) => {
    return {
        episodes: state.episodes,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchEpisodes, handleErrors })(EpisodesList);