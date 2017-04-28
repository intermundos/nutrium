import indexOf from 'lodash/indexOf'

export const NUTRITENT_SELECTED = 'select-nutrient/NUTRIENT_SELECTED'
export const NUTRITENT_REMOVED = 'select-nutrient/NUTRIENT_REMOVED'
export const REMOVE_SELECTED_NUTRIENTS = 'select-nutrient/REMOVE_SELECTED_NUTRIENTS'

export const selectNutrient = (nutrient) => ({ type: NUTRITENT_SELECTED, payload: nutrient })
export const removeNutrient = (nutrient) => ({ type: NUTRITENT_REMOVED, payload: nutrient })
export const clearAllSelected = () => ({ type: REMOVE_SELECTED_NUTRIENTS })


const initialState = {
  nutrients: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NUTRITENT_SELECTED :
      let selectedNutrient = action.payload
      selectedNutrient.isSelected = true
      return {
        ...state,
        nutrients: [ ...state.nutrients, selectedNutrient ]
      }
    case NUTRITENT_REMOVED :
      let index = indexOf(state.nutrients, action.payload)
      let removedNutrient = action.payload
      removedNutrient.isSelected = false
      return {
        ...state,
        nutrients: [
          ...state.nutrients.slice(0, index),
          ...state.nutrients.slice(index + 1)
        ]
      }

    case REMOVE_SELECTED_NUTRIENTS :
      return initialState
    default :
      return state
  }
}