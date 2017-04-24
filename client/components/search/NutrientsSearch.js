import React, {Component} from 'react'
import { connect } from 'react-redux'
import './NutrientSearch.scss'
import { fetchDataOnFocus } from '../../app-logic/reducers/nutrients'
import SearchResults from './SearchResults'

class NutrientsSearch extends Component {

  state = {
    searchInput: ''
  }

  resetSearch = () => {
    this.setState({ searchInput: '' })
  }

  fetchData = () => { !this.props._isFetched ? this.props.fetchDataOnFocus() : null }

  onSearchFocus = () => {
    this.fetchData()
    this.resetSearch()
  }

  handleInputChange = event => this.setState({ searchInput: event.target.value })

  filterSearch = () => {
    let { searchInput } = this.state
    let { _nutrients } = this.props
    let searchExp = new RegExp(searchInput, 'i');
    return searchInput !== '' ?  _nutrients.filter(nutrient =>
      nutrient.company.search(searchExp) > -1 || nutrient.name.search(searchExp) > -1
    )
    : []

  }

  render() {
    return (
      <div className={ `field nutrient-search` }>
        <p className="control has-icons-left">
          <input className="input"
                 type="search"
                 value={ this.state.searchInput }
                 onChange={ this.handleInputChange }
                 onFocus={ this.onSearchFocus }
                 placeholder="start typing..."
          />
          <span className="icon is-small is-left">
          <i className="fa fa-search"/>
        </span>
        </p>

        <SearchResults results={ this.filterSearch() }/>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    _isFetched: state.nutrients.isFetched,
    _nutrients: state.nutrients.nutrients
  }),
  { fetchDataOnFocus }
)(NutrientsSearch)

//TODO highlight matched input in results