import React, { Component } from "react";
import Book from "./Book";


class SearchResults extends Component {
    
  render() {
   
    return ( 
  
       <div className="search-books-results">
        <ol className="books-grid">
          {this.props.finalSearch &&
            this.props.finalSearch.length > 0 &&
            this.props.finalSearch.map((book) => (
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
    );
  }
}

export default SearchResults;
