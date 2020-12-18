import React from 'react'
import BookShelfChanger from './BookShelfChanger.js'
import {Link} from 'react-router-dom'

export default function Book(props) {
        return(
        <div className="book">
        <div className="book-top">
          <Link to={`/book/${props.book.id}`}>
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.book.imageLinks ? props.book.imageLinks.thumbnail : "#"}")` }}></div>  
          </Link>
            <BookShelfChanger book={props.book} onUpdateBook={props.onUpdateBook} />  
        </div>

          <div className="book-title">{props.book.title}</div>
          <div className="book-authors">{props.book.authors}</div>
        </div>)
}