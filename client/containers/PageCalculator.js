import React from 'react'

import NutrientsSearch from '../components/search/NutrientsSearch'
import SelectedNutrients from './SelectedNutrients'

const PageCalculator = props =>
  <div className="page page-calculator">
    <div className="container">
      <div className="search-select columns">
        <NutrientsSearch />
        <SelectedNutrients columnSize="is-4"/>
      </div>
    </div>
  </div>

export default PageCalculator