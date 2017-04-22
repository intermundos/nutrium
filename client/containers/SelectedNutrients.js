import React from 'react'
import { connect } from 'react-redux'
import SelectedNutrients from '../components/selected-nutrients/SelectedNutrients'

// import view

export default connect(
  state => state.selectedNutrients,
  null
)(SelectedNutrients)