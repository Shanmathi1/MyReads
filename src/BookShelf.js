import React, {Component} from 'react'
import startCase from "lodash.startcase"
import {Link} from 'react-router-dom'
import Book from "./Book";
import PropTypes from 'prop-types'

class BookShelf extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        handleBookListChange: PropTypes.func.isRequired
    }

    render() {
        const {books, handleBookListChange} = this.props

        const shelves = ["currentlyReading", "wantToRead", "read"]

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelves.map(shelf => {
                            return (
                                <div className="bookshelf" key={shelf}>
                                    <h2 className="bookshelf-title">{startCase(shelf)}</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {books
                                                .filter(book => book.shelf === shelf)
                                                .map(book =>
                                                    <li key={book.id}>
                                                        <Book
                                                            book={book}
                                                            books={books}
                                                            handleBookListChange={handleBookListChange}
                                                        />
                                                    </li>
                                                )}
                                        </ol>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to="/search"
                        className="open-search"
                    ></Link>
                </div>
            </div>
        )
    }
}

export default BookShelf