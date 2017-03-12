import React, { PropTypes } from 'react'
import Grocery from './Grocery'

const GroceryList = ({ groceries, onGroceryClick }) => (
  <ul>
    {groceries.map(grocery =>
      <Grocery
        key={grocery.id}
        {...grocery}
        onClick={() => onGroceryClick(grocery.id)}
      />
    )}
  </ul>
)

GroceryList.propTypes = {
  groceries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onGroceryClick: PropTypes.func.isRequired
}

export default GroceryList
