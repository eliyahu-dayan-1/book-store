export function LongTxt(props) {
    const {isLongTxtShown, text} = props
    return (
        <article className="long-txt">
            <p><span>description:</span> {(isLongTxtShown)? text: text.substring(0, 100)}</p>
        </article>
    )
}