import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import BookSearch from "./BookSearch";
import {Route, Switch} from 'react-router-dom'
import FourOfFour from "./FourOfFour";

class BooksApp extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    handleBookListChange = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            book.shelf = shelf
            this.setState(previousState => ({
                books: previousState.books.filter(b => b.id !== book.id).concat([book])
            }))
        })
    }

    render() {
        return (
            <div className="app">

                <Switch>
                <Route exact path='/' render={() => (
                    <BookShelf
                        books={this.state.books}
                        handleBookListChange={this.handleBookListChange}
                    />
                )}
                />
                <Route path='/search' render={() => (
                    <BookSearch
                        books={this.state.books}
                        handleBookListChange={this.handleBookListChange}
                    />
                )}
                />
                    <Route path="*" component={FourOfFour} />

                </Switch>
            </div>
        )
    }
}

export default BooksApp
