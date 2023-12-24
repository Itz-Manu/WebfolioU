import { useState } from 'react'
import './App.css'
import WebFolio from './WebFolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <WebFolio/>
    </div>
  )
}

export default App
