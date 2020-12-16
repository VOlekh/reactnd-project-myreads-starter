import React from 'react'
import Book from './Book.js'
import PropTypes from 'prop-types'



export default function BookShelf(props) {

    return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelf.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
                  {props.books.map((book) => {
                return(
                  <li key={book.id} className='books-grid-item'>
                  <Book 
                    book={book}
                    onUpdateBook={props.onUpdateBook}
                  />
                </li>
                 )})}     
          </ol>
        </div>
      </div>
    )
}