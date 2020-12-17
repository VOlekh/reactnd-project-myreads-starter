import React from 'react'
import { Link } from 'react-router-dom'



export default function BookDetails (props) {
        console.log(props)
        if (!props.book)
        {
            return(<p>Loading...</p>);
        }
        return(
            <div className="book-details">
                <Link to='/'><button className="close-search" >Close</button></Link>
                <div className="book-detail-top">
                    {/* <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.book.imageLinks ? props.book.imageLinks.thumbnail : "#"}")` }}></div> */}
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{props.book.authors}</div>
                <div className="book-averageRating">{props.book.averageRating}</div>
                <div className="book-categories">{props.book.categories}</div>
                <div className="book-publisher">{props.book.publisher}</div>
                <div className="book-page-count">{props.book.pageCount}</div>
                <div className="book-description">{props.book.description}</div> 
            </div>  
        )
}
