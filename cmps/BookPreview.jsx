const {Link} = ReactRouterDOM

export function BookPreview(props) {
    const { book} = props
    const { currencyCode } = props.book.listPrice
    const currencySign = (currencyCode === "ILS") ? "₪" :
                         (currencyCode === "EUR") ? "€" :
                         (currencyCode === "USD") ? "$" : "";
    return (
        <article className="book-preview" >
            <img src={book.thumbnail} alt="" />
            <p><span>title:</span> {book.title}</p>
            <p><span>price:</span> {book.listPrice.amount + " " + currencySign}</p>
            <Link className="further-details" to={`/books/${book.id}`  }>details</Link>
        </article>
    )
}