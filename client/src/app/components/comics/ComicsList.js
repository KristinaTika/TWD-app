import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComics, handleErrors } from '../../action-creators/actions';
import ComicItem from './ComicItem';
import Loader from '../../partials/Loader';
import './ComicsList.css';

class ComicsList extends Component {

    componentDidMount() {
        this.props.fetchComics();
    }

    render() {
        const { comics, error } = this.props;
        return (
            <div className="wrapper">
                <ul>
                    {error ? error : !comics ? <Loader /> : comics.map((c, i) => <ComicItem key={i} comic={c} />)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comics: state.comics,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchComics, handleErrors })(ComicsList);