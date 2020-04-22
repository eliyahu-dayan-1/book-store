import { bookService } from '../services/bookService.js';
import { utilService } from '../services/utilService.js';



export class BookReviews extends React.Component {

    state = {
        book: null
    }

    componentDidMount() {
        this.loadBook()
    }

    loadBook() {
        bookService.getById(this.props.match.params.theBookId)
            .then(book => {
                this.setState({ book })
            })
    }

    render() {

        const { book } = this.state
        const Loading = <p>Loading...</p>

        if (!book) return Loading;

        const emptyReview = <div>there isnt review yet, you can be the first!</div>
        return (< div className="book-reviews flex align-center justify-center column " >
            {(!book.review)? emptyReview : book.review.map(review => <div className="review flex align-center justify-center column wrap" key={utilService.makeId()}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIK3ZuM7U0TlYmsyxgJjm-AwdcHhj7vr9Mks7XJvCGFVEZBGJx&s" alt="" />
                <p><span>fullName:</span> {review.fullName}</p>
                <p><span>rate:</span> {review.rate}</p>
                <p><span>readAt:</span> {review.raedAt}</p>
                <p><span>freeText:</span> {review.freeText}</p>
            </div>
            )}
        </div >
        )
    }
}