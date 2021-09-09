import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Search from "./components/Search";
import { update } from "./BooksAPI";
import * as BooksAPI from "./BooksAPI";

class AppComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      showSearchPage: false,
      books: [],
    };

    this.fetchSearchResults = this.fetchSearchResults.bind(this);
    this.saveBooks = this.saveBooks.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then((resps) => this.saveBooks(resps));
  }

  saveBooks(resps) {
    this.setState((state) => ({
      ...state,
      books: [...state.books, ...resps],
    }));
  }

  fetchSearchResults(val) {
    BooksAPI.search(val).then((resp) => {
      if (resp.length > 0) {
        this.setState({ searchResults: resp });
      } else {
        this.setState({ error: "Book not found!" });
      }
    });
  }

  searchPageToggle = (val) => {
    this.setState({ showSearchPage: val });
  };

  clearSearchResults = () => {
    this.setState({
      searchLists: [],
    });
  };

  setBookCategoryHandler = (category, bookId) => {
    const existingBook = this.state.books.find((bk) => bk.id === bookId);
    if (existingBook) {
      existingBook.shelf = category;
      update(existingBook, category);
      return this.setState({
        books: [
          ...this.state.books.filter((b) => b.id !== existingBook.id),
          ...[existingBook],
        ],
      });
    }
    const newBook = this.state.searchResults.find((bk) => bk.id === bookId);
    newBook.shelf = category;
    update(newBook, category);
    return this.setState({
      books: [...this.state.books, ...[newBook]],
    });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => (
              <App
                {...props}
                setBookCategoryHandler={this.setBookCategoryHandler}
                saveBooks={this.saveBooks}
                books={this.state.books}
              />
            )}
          />
          <Route
            exact
            path="/search"
            component={(props) => (
              <Search
                {...props}
                fetchSearchResults={this.fetchSearchResults}
                searchResults={this.state.searchResults}
                searchPageToggle={this.searchPageToggle}
                setBookCategory={(category, bookId) =>
                  this.setBookCategoryHandler(category, bookId)
                }
                books={this.state.books}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default AppComponent;
