import { bookService } from '../services/bookService.js';

export class BookUserReview extends React.Component {
    state = {
        review: {
            fullName: 'book worm',
            rate: '',
            readAt: '',
            freeText: ''
        },
        book: null
    }

    componentDidMount() {
        this.loadBook()
    }

    loadBook() {
       bookService.getById(this.props.match.params.theBookId)
        .then(book =>{
            this.setState({ book})
        })
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? parseInt(target.value) : target.value

        this.setState(prevState => ({ review: { ...prevState.review, [field]: value } }))
    }

    onSendReview = (ev) => {
        ev.preventDefault()
        bookService.saveReview(this.state.review, this.state.book.id)
            .then(res => {
                console.log(res)
                alert(res)
                this.props.history.push(`/books/${this.state.book.id}`)
            })
    }

    render() {
        const { fullName, rate, readAt, freeText} = this.state.review
        const { book } = this.state
        const Loading = <p>Loading...</p>

        if (!book) return Loading;

        return (< div className="book-user-review flex align-center justify-center column" >
            <form onSubmit={this.onSendReview} className="flex justify-center align-center column">
                    <label htmlFor="">Yout Full name</label>
                    <input type="text" name='fullName' value={ fullName } onChange={ this.handleChange } />
                    <label htmlFor="">Rate</label>
                    <input type="number" name='rate' value={ rate } min="1" max="5" onChange={ this.handleChange } />
                    <label htmlFor="">Read at</label>
                    <input type="date" name='readAt' value={ readAt } onChange={ this.handleChange } />
                    <label htmlFor="">Free Text</label>
                    <textarea type="number" name='freeText' value={ freeText }  rows="4" cols="50" onChange={ this.handleChange } />
                    <button>send</button>
                </form>
        </ div >
        )
    }
}