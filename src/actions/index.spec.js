import * as actions from './index'

describe('grocery actions', () => {
  it('addGrocery should create ADD_GROCERY action', () => {
    expect(actions.addGrocery('Use Redux')).toEqual({
      type: 'ADD_GROCERY',
      id: 0,
      text: 'Use Redux'
    })
  })

  it('toggleGrocery should create TOGGLE_GROCERY action', () => {
    expect(actions.toggleGrocery(1)).toEqual({
      type: 'TOGGLE_GROCERY',
      id: 1
    })
  })
})
