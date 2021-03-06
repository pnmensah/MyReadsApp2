import React, { PureComponent } from "react";

export default class Book extends PureComponent {
  render() {
    const { book } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks &&
                book.imageLinks.thumbnail})`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={book.shelf || "none"}
              onChange={(e) => this.props.handleChange(book.id, e)}
            >
              <option value="move">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {Array.isArray(book.authors)
            ? book.authors.join(", ")
            : "No Author found"}
        </div>
      </div>
    );
  }
}
