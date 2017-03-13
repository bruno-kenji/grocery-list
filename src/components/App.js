import React from 'react'
import AddGrocery from '../containers/AddGrocery'
import VisibleGroceryList from '../containers/VisibleGroceryList'

const App = () => (
  <div>
    <h1
      className='text-center'
      style={{color: '#3D9970',
              letterSpacing: '3px'}}
    >
      Minha Lista de Compras
    </h1>
    <AddGrocery />
    <VisibleGroceryList />
  </div>
)

export default App
