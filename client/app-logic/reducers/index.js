import { combineReducers } from 'redux'

import test from './test'
import nutrients from './nutrients'
import selectedNutrients from './selectedNutrients'

const rootReducer = combineReducers({ nutrients, selectedNutrients })

export default rootReducer