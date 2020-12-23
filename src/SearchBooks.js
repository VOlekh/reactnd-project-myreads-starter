import React, { Component } from "react";
import Book from "./Book.js";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";

class SearchBooks extends Component {
  state = {
    query: "",
    books: [],
  };

  updateQuery = (query) => {
    this.setState(() => ({
      query: query,
    }));
    if (query !== "") {
      this.onSearchBook(query);
    } else {
      this.setState(() => ({
        books: [],
      }));
    }
  };

  clearQuery = () => {
    this.updateQuery("");
  };

  onSearchBook = (query) => {
    BooksAPI.search(query).then((books) => {
      if (!books.error && this.state.query !== "") {

        books = books.map((book) => {
          const bookOnShelf = this.props.books.find((b) => book.id === b.id);
          let shelf = 'none'
          if (bookOnShelf)
          {
            shelf = bookOnShelf.shelf
          }
          return {
            ...book,
            shelf: shelf,
          }
         })
      
        this.setState({
          books: books,
        
        });


      } else {
        this.setState({
          books: [],
        });
      }
    });
  };

  render() {
    const query = this.state.query;
    const books = this.state.books;
    console.log(books);

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/* {JSON.stringify(this.state)} */}
            {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
            {/* The user enters text into the input field. */}
            <input
              className="search-books-input"
              type="text"
              placeholder="Search by title or author"
              value={query}
              // The onChange event listener invokes the updateQuery() function.
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id} className="books-grid-item">
                <Book book={book} onUpdateBook={this.props.onUpdateBook} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchBooks;
