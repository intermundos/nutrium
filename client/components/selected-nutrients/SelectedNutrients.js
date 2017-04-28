import './SelectedNutrients.scss'
import React from 'react'
import ResultUnit from '../search/ResultUnit'

const SelectedNutrients = (props) => {

  const { nutrients, clearAllSelected } = props

  return nutrients.length > 0 ?
      <div className={ `field selected-nutrients` }>
        <div className="head">
          <span className="selected-count padSides-5">
            { nutrients.length }
          </span>
          {/*{*/}
            {/*nutrients.length > 1 ? 'nutrients ' : 'nutrient '*/}
          {/*}*/}
          selected
          <div className="delete" onClick={ () => clearAllSelected() }>

          </div>
        </div>
        <div className="selected-nutrients-list ">
          {
            nutrients.map((nutrient, index) =>
              <ResultUnit key={ nutrient.name } nutrient={ nutrient } isNPKvisible={ true }/>
            )
          }
        </div>
      </div> : null
}

export default SelectedNutrients