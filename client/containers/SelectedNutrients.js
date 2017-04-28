import React from 'react'
import { connect } from 'react-redux'
import { clearAllSelected } from '../app-logic/reducers/selectedNutrients'
import SelectedNutrients from '../components/selected-nutrients/SelectedNutrients'

// import view

export default connect(
  state => state.selectedNutrients,
  { clearAllSelected }
)(SelectedNutrients)