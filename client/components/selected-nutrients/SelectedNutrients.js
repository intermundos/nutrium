import './SelectedNutrients.scss'
import React from 'react'
import ResultUnit from '../search/ResultUnit'

const SelectedNutrients = (props) => {

  return (
    <div className={ `selected-nutrients column ${ props.columnSize }` }>
      <div className="head">
        Selected <span className="selected-count">{ props.nutrients.length }</span> nutrients
      </div>
      <hr/>
      {
        props.nutrients.map((nutrient, index) =>
          <ResultUnit key={ nutrient.name } nutrient={ nutrient }/>
        )
      }
    </div>
  )
}

export default SelectedNutrients