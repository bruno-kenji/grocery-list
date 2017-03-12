import React, { PropTypes } from 'react'

const Grocery = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      display: completed ? 'none' : 'list-item',
      cursor: 'pointer'
    }}
  >
    {text}
  </li>
)

Grocery.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Grocery
