import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1000)

  return (
    <>
      <div>The Count is {count}</div>
      <button onClick={()=>{setCount(count+1)}}>Count + 1</button><br/>
      <button onClick={()=>{setCount(count-1)}}>Count - 1 </button>
    </>
  )
}

export default App
