export class About extends React.Component {

        state = {
            interval:null,
        }

        componentDidMount() {
           this.state.interval = setInterval(() => console.log('about alive'),1000 ) 
        }

        componentWillUnmount() {
            console.log('about over')
            clearInterval(this.state.interval)
        }

        render(){
        return (
            <main className="flex column align-center justify-center">
              eliwawi.com leverages the power of the eliwawi brand to offer online customers the Web's premier destination for books, eBooks, magazines, toys & games, music and DVD , and related products and services.
            </main>
        )
    }
}
