import './NutrientsDosage.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class NutrientsDosage extends Component{

  render() {
    const { nutrients } = this.props
    return nutrients.length > 0 ?
      <div className={ `field dosage-inputs`}>
        <div className="head">dosage</div>

        <div className="dosage-inputs-list">
          {
            nutrients.map((nutrient) => {
              return (
                <div className="input-wrap">
                  <input type="text" className="input"/>

                  <div className="field">
                    <p className="control">
              <span className="select">
                <select>
                  <option value="ml">ml</option>
                  <option value="tsp">tsp</option>
                </select>
              </span>
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div> : null
  }
}

export default connect(
  state => ({ nutrients: state.selectedNutrients.nutrients }),
  null
)(NutrientsDosage)


