import React, { Component } from "react";
import Shelf from "./Shelf";

class Home extends Component {
  render() {
    const allBooks = this.props.allBooks;
    const currentlyReading = allBooks.filter(
      (book) => book.shelf === "currentlyReading"
    );
    const wantToRead = allBooks.filter((book) => book.shelf === "wantToRead");
    const read = allBooks.filter((book) => book.shelf === "read");

    return (
      // Shelf
      <div className="list-books-content">
        <div>
          {/* currently reading */}
          <Shelf
            books={currentlyReading}
            title={"Currently Reading"}
            setBookShelf={this.props.setBookCategory}
          />

          {/* want to read */}
          <Shelf
            books={wantToRead}
            title={"Want to Read"}
            setBookShelf={this.props.setBookCategory}
          />

          {/* read */}
          <Shelf
            books={read}
            title={"Read"}
            setBookShelf={this.props.setBookCategory}
          />
        </div>
      </div>
    );
  }
}

export default Home;
