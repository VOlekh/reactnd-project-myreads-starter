import React from 'react'
import Book from './Book.js'



export default function BookShelf( props) {

    return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelf.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
                  {props.books.map((book) => {
                return(
                 <Book key = {book.id} book={book}></Book>
                ) 
                 })}     
            
       
          </ol>
        </div>
      </div>
    )
}