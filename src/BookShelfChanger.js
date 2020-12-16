import React from 'react'

export default function BookShelfChanger(props) {
    return(
        <div className="book-shelf-changer">
            <select onChange={(event) => {props.onUpdateBook(props.book, event.target.value)}} 
            defaultValue= { props.book.shelf ? props.book.shelf : 'none'}>
            
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
            </select>
        </div>
    )
}