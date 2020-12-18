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
                <div className='list-books-title'>
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div className="bookshelf">
                        <Link to='/'><button className="close-search" >Close</button></Link>
                            <h2 className="bookshelf-title">Book details</h2>
                        
                        <div className="book-detail-top"></div>
                        <div className= "card-wrapper">
                            <div className="card">

                                <div className = "book-img-wrapper">
                                    <div className="book-cover" style={{ width: 256, height: 286, backgroundSize: 'auto', backgroundRepeat: 'no-repeat', backgroundImage: `url("${props.book.imageLinks ? props.book.imageLinks.thumbnail : "#"}")` }}></div>
                                </div>

                                <div className = "book-info-wrapper">
                                    <h2 className="book-details-title">{props.book.title}</h2>
                                    <h5 className="book-details-authors">Authors: {props.book.authors}</h5>
                                    <ul>
                                        <li className="book-averageRating">Average Rating: <span>{props.book.averageRating}</span></li>
                                        <li className="book-categories"> Categories: <span>{props.book.categories}</span></li>
                                        <li className="book-publisher">Publisher: <span>{props.book.publisher}</span></li>
                                        <li className="book-page-count"> Number of pages: <span>{props.book.pageCount}</span></li>
                                    </ul>
                                </div>
                    
                                <div className = "book-description-wrapper">
                                    <p className="book-description">{props.book.description}</p>
                                </div>  

                            </div>
                        </div>
                    </div>
                </div>    
            </div>  
        )
}
