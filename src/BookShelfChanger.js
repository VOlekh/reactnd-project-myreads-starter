import React from 'react'

export default function BookShelfChanger ({book, onUpdateBook}) {
    return(
        <div className="book-shelf-changer">
            <select>
            {/* <select onChange={(event) => {onUpdateBook(book, event.target.value)}} 
              defaultValue= {book.shelf ? book.shelf : 'none'}> */}
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
            </select>
        </div>
    )
}