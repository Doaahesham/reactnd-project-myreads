import React, { Component } from "react";
import InputSearch from "./InputSearch";
import SearchResults from "./SearchResults";
import * as BooksAPI from "./BooksAPI";

class SearchBooks extends Component {
  state = {
    gridBooks: [],
  };
  getSearchBooks = (myQuery) => {
    BooksAPI.search(myQuery).then((searchBooks) => {
      this.setState({
        gridBooks: searchBooks,
      });
    });
  };

  render() {
    let finalSearch = [];

    if (this.state.gridBooks === undefined) {
      finalSearch = [];
    } else if (this.state.gridBooks.error) {
      finalSearch = [];
    } else {
      this.state.gridBooks.forEach((gridBook) => {
        let filterBook = this.props.booksArray.filter(
          (book) => gridBook.id === book.id
        );
        if (filterBook.length) {
          finalSearch.push(...filterBook);
        } else {
          gridBook.shelf = "none";
          finalSearch.push(gridBook);
        }
      });
    }

    return (
      <div className="search-books">
        <InputSearch getSearchBooks={this.getSearchBooks} />
        <SearchResults
          gridBooks={this.state.gridBooks}
          updateState={this.props.updateState}
          finalSearch={finalSearch}
        />
      </div>
    );
  }
}

export default SearchBooks;
