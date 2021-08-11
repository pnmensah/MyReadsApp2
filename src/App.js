import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Link } from "react-router-dom";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          {/* HEADER */}
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <Home
            allBooks={this.props.books}
            setBookCategory={(category, bookId) =>
              this.props.setBookCategoryHandler(category, bookId)
            }
          />

          {/* SEARCH BUTTOM*/}
          <div className="open-search">
            <Link to="/search">
              <button>Add a book</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BooksApp;
