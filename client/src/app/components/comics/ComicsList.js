import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComics, handleErrors } from '../../action-creators/actions';
import ComicItem from './ComicItem';
import Loader from '../../partials/Loader';
import './ComicsList.css';
import PropTypes from 'prop-types';

class ComicsList extends Component {
    constructor(props) {
        super(props);

        this.mapItems = this.mapItems.bind(this);
    }
    componentDidMount() {
        this.props.fetchComics();
    }

    mapItems(items) {
        return items.map((item, i) => <li key={i}>{item} </li>);
    }

    render() {
        const { comics, error } = this.props;
        return (
            <div className="wrapper">
                {error ? error : !comics ? <Loader /> :
                    <div>
                        <p> {comics.info} </p>
                        <div>
                            <span className="bold-title">Publishers: </span>
                            <span>{this.mapItems(comics.publisher)}</span>
                        </div>
                        <ul>
                            {comics.volumes.map((c, i) => <ComicItem key={i} comic={c} />)}
                        </ul>
                    </div>}
            </div>
        );
    }
}
ComicsList.propTypes = {
    fetchComics: PropTypes.func.isRequired,
    handleErrors: PropTypes.func.isRequired,
    comics: PropTypes.object,
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        comics: state.comics,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchComics, handleErrors })(ComicsList);