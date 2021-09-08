import React, { Component } from "react";
import Book from "../components/Book";
import { Link } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      error: "",
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearchInput = (e) => {
    const val = e.target.value;
    this.setState({ searchInput: val }, () =>
      this.props.fetchSearchResults(val)
    );
  };

  handleChange = (id, e) => {
    const shelf = e.target.value;
    this.props.setBookCategory(shelf, id);
  };

  render() {
    return (
      // Search Component
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>

          <div className="search-books-input-wrapper">
            {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
            <input
              name="searchInput"
              value={this.state.searchInput}
              onChange={(e) => this.handleSearchInput(e)}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.error}
          <ol className="books-grid" />
          <ol className="books-grid">
            {this.props.searchResults.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  shelf={book.shelf}
                  handleChange={this.handleChange}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
