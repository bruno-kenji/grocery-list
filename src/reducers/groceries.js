const grocery = (state, action) => {
  switch (action.type) {
    case 'ADD_GROCERY':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_GROCERY':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const groceries = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GROCERY':
      return [
        ...state,
        grocery(undefined, action)
      ]
    case 'TOGGLE_GROCERY':
      return state.map(t =>
        grocery(t, action)
      )
    default:
      return state
  }
}

export default groceries
