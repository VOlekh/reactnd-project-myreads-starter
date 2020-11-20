import React from 'react'
import Book from './Book.js'

export default function BookShelf(props) {
    const books =  props.books
    return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.books.map((book) => {
                return(
                 <Book book={book}></Book>
                )
            })}
          </ol>
        </div>
      </div>
    )
}