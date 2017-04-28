import './PageCalculator.scss'
import React from 'react'

import NutrientsSearch from '../../components/search/NutrientsSearch'
import SelectedNutrients from '../SelectedNutrients'
import NutrientsDosage from '../../components/dosage/NutrientsDosage'

const PageCalculator = props =>
  <div className="page page-calculator">
    <div className="containerr">
      <div className="grid-container">
          <NutrientsSearch />
          <div className="selected-block">
            <SelectedNutrients />
            <NutrientsDosage />
          </div>
      </div>
    </div>
  </div>

export default PageCalculator