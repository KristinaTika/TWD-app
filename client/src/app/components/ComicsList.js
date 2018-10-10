import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComics } from '../action-creators/actions';
import ComicItem from './ComicItem';

class ComicsList extends Component {

    componentDidMount() {
        this.props.fetchComics();
    }

    render() {
        const { comics} = this.props;
        let renderComics = <div> loading </div>
        if(!comics) {
            return renderComics;
        }

        renderComics = comics.map((c, i) => <ComicItem key={i} comic={c} />)
        return (
            <div>
                {renderComics}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comics: state.comics
    }
}

export default connect(mapStateToProps, { fetchComics}) (ComicsList);