import React, { Component } from "react";
import Book from "../components/Book";

class Shelf extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id, e) {
    const shelf = e.target.value;
    this.props.setBookShelf(shelf, id);
  }

  render() {
    const shelfBooks = this.props.books;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelfBooks.map((book) => (
              <li key={book.id}>
                <Book book={book} handleChange={this.handleChange} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
