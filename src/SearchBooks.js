import React, { Component } from "react"
import Book from "./Book.js"
import {Link} from 'react-router-dom'


class SearchBooks extends Component {
  state = {
    query: "",
    books: [],
  };
  // updateQuery() then calls setState(), merging in the new state to update the component's internal state.
  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim(),
    }));
  };

  clearQuery = () => {
    this.updateQuery("");
  };

  render() {
    const query = this.state.query;
    const books = this.props.books;
    console.log(books)

    const showingBooks =
      query === ""
        ? books
        : books.filter(
            (b) =>
              b.title.toLowerCase().includes(query.toLowerCase()) 
              || b.authors.some((item) => item.toLowerCase().includes(query.toLowerCase()))
          );

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          {/* <button
            className="close-search"
            onClick={() => this.setState({ showSearchPage: false })}
          >
            Close
          </button> */}
          <div className="search-books-input-wrapper">
            {JSON.stringify(this.state)}
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
            {/* <BookShelf books={books} title='Search' onUpdateBook={onUpdateBook}/>  */}
            {showingBooks.map((book) => (
              <li key={book.id} className='books-grid-item'>
                <Book book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchBooks;
