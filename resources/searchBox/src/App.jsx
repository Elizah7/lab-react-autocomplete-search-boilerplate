import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBox from './Components/SearchBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SearchBox/>
    </>
  )
}

export default App