import { connect } from 'react-redux'
import { toggleGrocery } from '../actions'
import GroceryList from '../components/GroceryList'

const getVisibleGroceries = (groceries, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return groceries
    case 'SHOW_COMPLETED':
      return groceries.filter(grocery => grocery.completed)
    case 'SHOW_ACTIVE':
      return groceries.filter(grocery => !grocery.completed)
    default:
      return
  }
}

const mapStateToProps = (state) => {
  return {
    groceries: getVisibleGroceries(state.groceries, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGroceryClick: (id) => {
      dispatch(toggleGrocery(id))
    }
  }
}

const VisibleGroceryList = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryList)

export default VisibleGroceryList
