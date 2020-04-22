const { NavLink } = ReactRouterDOM


export function NavBar() {
    return (
        <header className="main-header flex align-center space-between" >
            <div className="logo-container flex">
                <div className="logo"><a href="#">Eliwawi Books</a></div>
                <img src="../assets/img/book-icon.svg" alt="" />
            </div>
            <div className="link-container flex">
                <NavLink exact to='/'>Home</NavLink>
                <NavLink exact to='/about'>About</NavLink>
                <NavLink exact to='/books'>Books</NavLink>
            </div>

        </header>
    )
}