import './SearchResults.scss'
import React from 'react'
import ResultUnit from './ResultUnit'


const SearchResults = props => {
  let results = props.results || []
  return (
    <div className="search-results">
      {
        results
          .map((nutrient, index) => <ResultUnit nutrient={ nutrient } key={ nutrient.name } />)
      }
    </div>
  )
}

export default SearchResults