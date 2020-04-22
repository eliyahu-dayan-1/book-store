const { Link } = ReactRouterDOM

export class HomePage extends React.Component {

    render() {

        return (
            <main className="flex align-center justify-center">
                <div className="welcom-sentences animated slower infinite heartBeat" onClick={() => this.props.history.push(`/books`)
                }>
                    explore the book world!!!
                    </div>
            </main>
        )
    }
}