import React from "react";
import "./App.css";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";
import { BrowserRouter, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    allBooks: [],
  };
  componentDidMount() {
    BooksAPI.getAll().then((booksApi) => {
      this.setState({ allBooks: booksApi });
    });
  }
  updateState = (book, shelf) => {
    BooksAPI.update(book, shelf).then(
      BooksAPI.getAll().then((booksApi) => {
        this.setState({ allBooks: booksApi });
      })
    );
  };

  render() {
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              booksArray={this.state.allBooks}
              updateState={this.updateState}
            />
          )}
        />

        <Route
          path="/search"
          render={() => (
            <SearchBooks
              booksArray={this.state.allBooks}
              updateState={this.updateState}

            />
          )}
        />
      </BrowserRouter>
    );
  }
}

export default BooksApp;
