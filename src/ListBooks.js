import React, { Component } from "react";
import ShelfBooks from "./ShelfBooks";
import MyReads from "./MyReads";
import PlusButton from "./PlusButton";


class ListBooks extends Component {
  state = {};

  render() {
    return (
      <div className="list-books">
        <MyReads />
        <div className="list-books-content">
          <div>
            <ShelfBooks
              shelftitle="Currently Reading"
              Books={this.props.booksArray}
              updateState={this.props.updateState}
            />
            <ShelfBooks
              shelftitle="Want to read"
              Books={this.props.booksArray}
              updateState={this.props.updateState}
            />
            <ShelfBooks
              shelftitle="Read"
              Books={this.props.booksArray}
              updateState={this.props.updateState}
            />
          </div>
        </div>
        <PlusButton />
      </div>
    );
  }
}

export default ListBooks;
