import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSeasons } from '../../action-creators/actions';

class SeasonsList extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                seasons
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {fetchSeasons}) (SeasonsList);