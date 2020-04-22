import { LongTxt } from './BookDescriptionPreview.jsx'
import { bookService } from '../services/bookService.js';



export class BookDetails extends React.Component {

    state = {
        book: null
    }

    componentDidMount() {
        this.loadBook()
    }

    loadBook() {
       bookService.getById(this.props.match.params.theBookId)
        .then(bookToShow =>{
            this.setState({ book: bookToShow })
        })
    }

    onShowMore = () => {
        this.setState(prevState => ({ isLongTxtShown: !prevState.isLongTxtShown }))
    }

    render() {

        const { book, isLongTxtShown } = this.state
        const {onShowMore} = this
        const Loading = <p>Loading...</p>

        if (!book) return Loading;

        const { currencyCode, amount } = book.listPrice
        const currencySign = (currencyCode === "ILS") ? "₪" :
            (currencyCode === "EUR") ? "€" :
                (currencyCode === "USD") ? "$" : "";

        const bookType = (book.pageCount < 100) ? "Light Reading" :
            (book.pageCount < 200) ? "Decent Reading" : "Long reading"

        const currYear = new Date().getFullYear()
        const newStatus = (book.publishedDate === currYear) ? "new" :
            (book.publishedDate < currYear - 10) ? "Veteran Book" : "book.publishedDate"

        const priceStatus = (amount > 150) ? 'red' : 'green'

        return (< div className="book-detail flex align-center justify-center column" >
            <img src={book.thumbnail} alt="" />
            <p>---{(book.listPrice.isOnSale) ? "Is" : 'Not'}  in stock---</p>
            <p><span>title:</span> {book.title}</p>
            <p className={priceStatus}><span>price:</span> {amount + " " + currencySign}</p>
            <p><span>lng:</span> {book.language}</p>
            <p><span>stage reading:</span> {bookType}</p>
            <p><span>new status:</span> {newStatus}</p>
            <p><span>categories:</span> {book.categories.toString()}</p>
            <LongTxt text={book.description} isLongTxtShown={isLongTxtShown} />
            <button className="show-more" onClick={() => onShowMore()}>showMore</button>
        </div >
        )
    }
}