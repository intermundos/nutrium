import './ResultUnit.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectNutrient, removeNutrient } from '../../app-logic/reducers/selectedNutrients'

class ResultUnit extends Component {

  state = {
    isSelected: this.props.nutrient.isSelected
  }

  toggleCheckboxChange = (nutrient) => {
    this.setState({ isSelected: !this.props.nutrient.isSelected })
    !nutrient.isSelected ? this.props.selectNutrient(nutrient) : this.props.removeNutrient(nutrient)
  }

  showNKP = nutrientElements =>
    <div className="NPK">
      <span>NPK:</span>
      <span>{ nutrientElements.N }</span>
      <span>{ nutrientElements.P } </span>
      <span>{ nutrientElements.K }</span>
    </div>

  render() {
    let { nutrient, isNPKvisible } = this.props
    let nutrientElements = nutrient.elements
    let isSelected = nutrient.isSelected
    return (
      <div className={ `result-unit panel-block ${ isSelected ? 'is-active': '' }`}
           onClick={ () => this.toggleCheckboxChange(nutrient)}
      >
          <div className="checkbox-view">
            <i className={ `fa ${ isSelected ? 'fa-check-square' : ''}` } aria-hidden="true" />
          </div>
          <div className="unit-company">{ nutrient.company }</div>
          <span className="dash">-</span>
          <div className="unit-name">{ nutrient.name }</div>

          {
            isNPKvisible ?  this.showNKP(nutrientElements)  : null
          }
      </div>
    )
  }
}

export default connect(
  null,
  { selectNutrient, removeNutrient }
)(ResultUnit)