import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'
import Person from './Person'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Greeting name={"Eyoel"}/>
    <Person/>
  )
}

export default App
