import React, { Component } from "react";
import Book from "./Book";

class ShelfBooks extends Component {
  state = {};

  render() {
    let status = " ";

    if (this.props.shelftitle === "Currently Reading") {
      status = "currentlyReading";
    } else if (this.props.shelftitle === "Want to read") {
      status = "wantToRead";
    } else {
      status = "read";
    }

    let filterBooks = this.props.Books.filter((book) => book.shelf === status);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelftitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {filterBooks.map((book) => (
              <Book key={book.id}
                titleName={book.title}
                authorName={book.authors}
                
                shelfState={book.shelf}
                book={book}
                updateState={this.props.updateState}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default ShelfBooks;
