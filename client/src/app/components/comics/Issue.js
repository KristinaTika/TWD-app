import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleIssue, handleErrors } from '../../action-creators/actions';
import './Issue.css';
import Loader from '../../partials/Loader';

class Issue extends Component {



    componentDidMount() {
        const { name, id } = this.props.match.params;
        this.props.fetchSingleIssue(name, id);
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        issue: state.issue,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSingleIssue, handleErrors}) (Issue);