import { useState } from 'react'

import './App.css'

function App() {
  const [valor, setvalor] = useState(0)

  return (
    <>
      <label htmlFor="numero">Escolha um numero: </label>
      <input
        type="number"
        className='binar'
        onChange={(e) => setvalor(e.target.value)}
      />
      <p >{parseInt(valor, 2)}</p>
    </>
  )
}

export default App
