import React, { PropTypes } from 'react'
import Grocery from './Grocery'
import { ListGroup } from 'react-bootstrap'
import { Bootstrap } from 'bootstrap/dist/css/bootstrap.css'

const GroceryList = ({ groceries, onGroceryClick }) => (
  <ListGroup
    className='col-sm-offset-2 col-md-offset-3 col-lg-offset-4 col-sm-8 col-md-6 col-lg-4'
    style={{
      marginTop: '15px',
      letterSpacing: '2.5px',
      fontSize: '16px'
    }}
  >
    {groceries.map(grocery =>
      <Grocery
        key={grocery.id}
        {...grocery}
        onClick={() => onGroceryClick(grocery.id)}
      />
    )}
  </ListGroup>
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
