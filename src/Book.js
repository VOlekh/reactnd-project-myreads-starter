import React from 'react'
import BookShelfChanger from './BookShelfChanger.js'

export default function Book(props) {
        return(
      <li >{
        <div className="book">
          <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.book.imageLinks}")` }}></div>
            <BookShelfChanger></BookShelfChanger>
          </div>
          <div className="book-title">{props.book.title}</div>
          <div className="book-authors">{props.book.authors}</div>
        </div>
        }
      </li>
    )
}