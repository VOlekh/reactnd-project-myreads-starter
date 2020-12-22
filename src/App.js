import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf.js'
import SearchBooks from './SearchBooks.js'
import BookDetails from './BookDetails.js'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

const currently_reading_shelf = {shelfTitle: 'Currently Reading', id: 'currentlyReading'};
const want_to_read_shelf = {shelfTitle: 'Want To Read', id: 'wantToRead'};
const read_shelf = {shelfTitle:'Read',   id: 'read'};

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
  }

  componentDidMount () {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll()
    .then(books => {
      this.setState({
        books
      })}
    )};
  

  onUpdateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getAllBooks();
      })

  }     

render() {
    console.log ("BooksApi outcome", this.state.books)
    const books_on_shelf = this.state.books.filter (book =>book.shelf === 'currentlyReading' )
    const books_on_shelf2 = this.state.books.filter (book =>book.shelf === 'wantToRead' )
    const books_on_shelf3 = this.state.books.filter (book =>book.shelf === 'read' )
    console.log ("Filtered books on shelf", books_on_shelf)


    return (
      <div className="app">
        

        <Route exact path='/search' render = {()=>(
          <SearchBooks books={this.state.books} onUpdateBook={this.onUpdateBook} ></SearchBooks>
        )}/>

        <Route exact path='/book/:id' render={(props) =>(
          <BookDetails book={this.state.books.find((item) => item.id === props.match.params.id)}/>
        )}/>
           
        <Route exact path="/">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf books={books_on_shelf} shelf={currently_reading_shelf} onUpdateBook={this.onUpdateBook}></BookShelf>
                <BookShelf books={books_on_shelf2} shelf={want_to_read_shelf} onUpdateBook={this.onUpdateBook}></BookShelf>
                <BookShelf books={books_on_shelf3} shelf={read_shelf} onUpdateBook={this.onUpdateBook}></BookShelf>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search' className='search-book'><button>Add a Book</button></Link>
              {/* <button component={Link} to='/search' onClick={() => this.setState({ showSearchPage: true })} >Add a book</button> */}
            
            </div>
          </div>
        </Route>
  
      </div>
    )
  }
}

export default BooksApp
