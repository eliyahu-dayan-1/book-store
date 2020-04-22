import {BookPreview} from '../cmps/BookPreview.jsx'

export function BookList(props) {
    return (
        <div className="books-list flex justify-center">
            {props.books.map(book => <BookPreview onSelectBook={props.onSelectBook} key={book.id} book={book}/>)}
        </div>
    )
}