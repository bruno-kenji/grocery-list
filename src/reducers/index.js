import { combineReducers } from 'redux'
import groceries from './groceries'
import visibilityFilter from './visibilityFilter'

const groceryApp = combineReducers({
  groceries,
  visibilityFilter
})

export default groceryApp
