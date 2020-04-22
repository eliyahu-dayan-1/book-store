const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM
const history = History.createBrowserHistory()

import { BookApp } from './pages/BookApp.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { About } from './pages/About.jsx'
import { NavBar } from './cmps/BookNavBar.jsx'
import { Footer } from './cmps/BookFooter.jsx'
import { BookReview } from './pages/BookReview.jsx'

function Home() {
    return <section>HOME</section>
}

export class App extends React.Component {

    render() {
        return (
            <Router history={history}>

                <div className="page-container flex column">
                    {/* header */}
                        <NavBar />

                    {/* main */}
                        <Switch>
                            <Route exact component={HomePage} path="/" />
                            <Route exact component={About} path="/about" />
                            <Route exact component={BookApp} path="/books" />
                            <Route component={BookReview} path="/books/:theBookId" />
                        </Switch>

                    {/*footer*/}
                        <Footer />
                </div>
            </Router>

        )
    }
}

