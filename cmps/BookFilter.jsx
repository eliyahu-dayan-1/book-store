export class BookFilter extends React.Component {
    state = {
        filter: {
            name: '',
            minPrice: '',
            maxPrice: '',
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? parseInt(target.value) : target.value

        this.setState(prevState => ({ filter: { ...prevState.filter, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filter)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filter)
    }

    render() {
        const { name, maxPrice, minPrice } = this.state.filter
        return (
            <React.Fragment>
                <form onSubmit={ this.onFilter } className="filter-form flex justify-center align-center">
                    <label htmlFor="">name</label>
                    <input type="text" name='name' value={ name } onChange={ this.handleChange } />
                    <label htmlFor="">min price</label>
                    <input type="number" name='minPrice' value={ minPrice } onChange={ this.handleChange } />
                    <label htmlFor="">max price</label>
                    <input type="number" name='maxPrice' value={ maxPrice } onChange={ this.handleChange } />
                    {/* <button>Filter</button> */}
                </form>
            </React.Fragment>
        )
    }
}