import React, { PropTypes } from 'react'
import { ListGroupItem } from 'react-bootstrap'

const Grocery = ({ onClick, completed, text }) => (
  <ListGroupItem
    onClick={onClick}
    style={{
      display: completed ? 'none' : 'list-item',
      cursor: 'pointer',
      color: '#3D9970'
    }}
  >
    {text}
  </ListGroupItem>
)

Grocery.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Grocery
