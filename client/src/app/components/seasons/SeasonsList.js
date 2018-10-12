import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSeasons, handleErrors } from '../../action-creators/actions';
import PropTypes from 'prop-types';
import './SeasonsList.css';
import Loader from '../../partials/Loader';
import Season from './Season';


class SeasonsList extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        this.props.fetchSeasons();
    }

    render() {
        const { seasons, error } = this.props;
        return (
            <div className="wrapper">
                <ul>
                    {error ? error : !seasons ? <Loader /> : seasons.map((season, i) => <Season key={i} season={season} />)}
                </ul>
            </div>
        );
    }
}
SeasonsList.propTypes = {
    fetchSeasons: PropTypes.func.isRequired,
    handleErrors: PropTypes.func.isRequired,
    seasons: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        seasons: state.seasons,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSeasons, handleErrors })(SeasonsList);