import './PageCalculator.scss'
import React from 'react'

import NutrientsSearch from '../../components/search/NutrientsSearch'
import SelectedNutrients from '../SelectedNutrients'
import NutrientsDosage from '../../components/dosage/NutrientsDosage'

const PageCalculator = props =>
  <div className="page page-calculator">
    <div className="containerr">
      <div className="search-select columns">
        <NutrientsSearch columnSize="is-3" />
        <SelectedNutrients columnSize="is-5" />
        <NutrientsDosage />
      </div>
    </div>
  </div>

export default PageCalculator