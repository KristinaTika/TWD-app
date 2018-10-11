import React, { Component } from 'react';
import BookItem from './BookItem';
import { connect } from 'react-redux';
import { fetchBooks, handleErrors } from '../../action-creators/actions';
import './BooksList.css';
import BookLoader from '../../partials/BookLoader';

class BooksList extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, error } = this.props;
        return (
            <div>
                {error ? error : !books ? <BookLoader /> : books.map((book, i) => <BookItem key={i} book={book} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchBooks, handleErrors}) (BooksList);