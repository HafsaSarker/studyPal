import { useState } from 'react'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import './App.css'

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <HomePage 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn}/>
    </div>
  )
}

export default App
