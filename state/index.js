import checkoutState from './checkoutState'
import { combineReducers } from 'redux'
import navState from './navState'

export default combineReducers({
  navState,
  checkoutState,
})
