let nextGroceryId = 0
export const addGrocery = (text) => ({
  type: 'ADD_GROCERY',
  id: nextGroceryId++,
  text
})

export const toggleGrocery = (id) => ({
  type: 'TOGGLE_GROCERY',
  id
})
