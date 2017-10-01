import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from "./Book"
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import DebounceInput from 'react-debounce-input'

class BookSearch extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        handleBookListChange: PropTypes.func.isRequired
    }

    state = {
        query: '',
        newBooks: []
    }

    getBooks = (event) => {
        var query = event.target.value;

        //const query = value.trim();
        this.setState({query: query})

        if (query) {
            BooksAPI.search(query.trim(), 20).then((books) => {
                books.length > 0 ?
                    this.setState({newBooks: books})
                    : this.setState({newBooks: []})
            })
        } else this.setState({newBooks: []})
    }

    render() {
        const {query, newBooks} = this.state

        const {books, handleBookListChange} = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <div className="close-search">
                        <Link className='close-search' to='/'></Link>
                    </div>
                    <div className="search-books-input-wrapper">
                        <DebounceInput
                            debounceTimeout={300}
                            element="input"
                            type="text"
                            value={query}
                            onChange={this.getBooks}
                            placeholder="Search by title or author"
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {newBooks.length > 0 && (

                        <ol className="books-grid">
                            {newBooks.map(book => {
                                return (
                                    <li key={book.id}>
                                        <Book
                                            book={book}
                                            books={books}
                                            handleBookListChange={handleBookListChange}
                                        />
                                    </li>
                                )
                            })}
                        </ol>
                    )}
                </div>
            </div>
        )
    }
}

export default BookSearch