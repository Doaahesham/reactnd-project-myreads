import React, { Component } from "react";

class SelectOptions extends Component {
  state = {
    selectValue: this.props.book.shelf,
  };

  makeUpdate = (event) => {
    this.setState({
      selectValue: event.target.value,
    });

    this.props.updateState(this.props.book, event.target.value);
  };
  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.book.shelf}
          onChange={(event) => {
            this.makeUpdate(event);
          }}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default SelectOptions;
