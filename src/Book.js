import React, { Component } from "react";
import SelectOptions from "./SelectOptions";

class Book extends Component {
  state = {};

  render() {
    return (
      <div className="book">
        <div className="book-top">
          {this.props.book.imageLinks !== undefined && (
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 188,
                backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`,
              }}
            />
          )}
          <SelectOptions
            shelfState={this.props.shelfState}
            updateState={this.props.updateState}
            book={this.props.book}
          />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
}

export default Book;
