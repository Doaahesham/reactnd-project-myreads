import React, { Component } from "react";
import BackButton from "./BackButton";

class InputSearch extends Component {
  state = {
    query: "",
  };
  applySearch = (event) => {
    this.setState({ query: event.target.value });
    this.props.getSearchBooks(event.target.value);
  };

  render() {
    return (
      <div className="search-books-bar">
        <BackButton />

       
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event) => {
              this.applySearch(event);
            }}
          />
        </div>
      </div>
    );
  }
}

export default InputSearch;
