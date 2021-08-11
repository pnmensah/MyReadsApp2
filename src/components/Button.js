import React, { Component } from "react";
import { Link } from "react-router-dom";

class Button extends Component {
  render() {
    return (
      <Link to="/search">
        <Button className="open-search">
          <button onClick={() => this.props.showSearchPage(true)}>
            Add a book
          </button>
        </Button>
      </Link>
    );
  }
}

export default Button;
