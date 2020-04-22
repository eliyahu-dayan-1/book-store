const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM


import { bookService } from '../services/bookService.js';
import { BookDetails } from '../cmps/BookDetails.jsx'
import { BookReviews } from '../cmps/BookReviews.jsx'
import { BookUserReview } from '../cmps/BookUserReview.jsx'

export class BookReview extends React.Component {
    state = {
        isLongTxtShown: false,
        book: null,
        
    }

    componentDidMount() {
        const id = this.props.match.params.theBookId;

        bookService.getById(id)
            .then(book => this.setState({ book }))
    }

    render() {
        const { book } = this.state
        const Loading = <p>Loading...</p>

        if (!book) return Loading;

        return (<main className=" flex align-center justify-center column">
            <div className="link-container flex">
                <NavLink exact to={`/books/${book.id}/`}>Details</NavLink>
                <NavLink exact to={`/books/${book.id}/reviews`}>Reviews</NavLink>
                <NavLink exact to={`/books/${book.id}/user_review`}>Write review</NavLink>
            </div>
            <Route exact component={BookDetails} path={`/books/:theBookId`} />
            <Route exact component={BookReviews} path={`/books/:theBookId/reviews`} />
            <Route exact component={BookUserReview} path={`/books/:theBookId/user_review`} />

        </main>)
    }
}