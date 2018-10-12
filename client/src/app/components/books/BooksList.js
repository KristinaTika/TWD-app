import React, { Component } from 'react';
import BookItem from './BookItem';
import { connect } from 'react-redux';
import { fetchBooks, handleErrors } from '../../action-creators/actions';
import './BooksList.css';
import BookLoader from '../../partials/BookLoader';
import PropTypes from 'prop-types';

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
BooksList.propTypes = {
    fetchBooks: PropTypes.func.isRequired,
    handleErrors: PropTypes.func.isRequired,
    books: PropTypes.arrayOf(PropTypes.object),
    error:PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchBooks, handleErrors}) (BooksList);