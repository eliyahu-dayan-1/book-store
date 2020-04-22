const { Link } = ReactRouterDOM


import {bookService} from '../services/bookService.js'
import {BookFilter} from '../cmps/BookFilter.jsx'
import {BookList} from '../cmps/BookList.jsx'
import {BookReview} from './BookReview.jsx'


export class BookApp extends React.Component {
    state = {
        booksToShow: null,
        selectedBook: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks() {
       bookService.query(this.state.filterBy)
        .then(booksToShow =>{
            this.setState({ booksToShow })
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadCars())
    }

    onSelectBook = (selectedBook) =>{
        this.setState({ selectedBook })
    }

    onUnSelectBook = () =>{
        this.setState({ selectedBook: undefined })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadCars())
    }

    loadCars() {
     bookService.query(this.state.filterBy)
     .then(booksToShow => {
        this.setState({ booksToShow }) 
    })
       
    }
    


    render() {
        const { booksToShow, selectedBook, filterBy} = this.state

        return (
            <main className="flex column align-item">
                {selectedBook && <BookReview book={selectedBook} onBack={this.onUnSelectBook}></BookReview>}
                {!selectedBook && booksToShow && <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter}/>}
                {!selectedBook && booksToShow && <BookList onSelectBook={this.onSelectBook} books={booksToShow}></BookList>}
            </main>
        )
    }
}