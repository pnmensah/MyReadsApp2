import React, { Component } from "react";
import Shelf from "./Shelf";

class Home extends Component {
  getBookShelf = (shelf) => {
    const allBooks = this.props.allBooks;
    return allBooks ? allBooks.filter((book) => book.shelf === shelf) : [];
  };
  render() {
    // const currentlyReading = allBooks.filter(
    //   (book) => book.shelf === "currentlyReading"
    // );
    // const wantToRead = allBooks.filter((book) => book.shelf === "wantToRead");
    // const read = allBooks.filter((book) => book.shelf === "read");

    return (
      // Shelf
      <div className="list-books-content">
        <div>
          {/* currently reading */}
          <Shelf
            books={this.getBookShelf("currentlyReading")}
            title={"Currently Reading"}
            setBookShelf={this.props.setBookCategory}
          />

          {/* want to read */}
          <Shelf
            books={this.getBookShelf("wantToRead")}
            title={"Want to Read"}
            setBookShelf={this.props.setBookCategory}
          />

          {/* read */}
          <Shelf
            books={this.getBookShelf("read")}
            title={"Read"}
            setBookShelf={this.props.setBookCategory}
          />
        </div>
      </div>
    );
  }
}

export default Home;
