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
  getAllBooks =() =>{
    BooksAPI.getAll().then((booksApi) => {
      this.setState({ allBooks: booksApi });
    });
  } 
  updateState = (book, shelf) => {
    BooksAPI.update(book, shelf).then(
     this.getAllBooks
    );
  };

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/">
          <ListBooks
            booksArray={this.state.allBooks}
            updateState={this.updateState}
          />
        </Route>

        <Route path="/search">
          <SearchBooks
            booksArray={this.state.allBooks}
            updateState={this.updateState}
          />
        </Route>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
