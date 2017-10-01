# MyReads App

This is a React app that allows user to select and categorize books as they read, or currently reading, or want to read. 

To run the app - 

* install all project dependencies with `npm install`
* start the development server with `npm start`

## How to Use the App

* Books are sorted into three categories: Currently Reading, Want to Read and Read
* To move a book to a different category or remove a book from the list, click on the green arrow near the book image
* To add new books,  click on the green plus button at the bottom of the page. User can enter the title or author name

## Backend Server

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

## Book Search Results
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Resources

[Udacity React Nanodegree Program](https://www.udacity.com/course/react-nanodegree--nd019)