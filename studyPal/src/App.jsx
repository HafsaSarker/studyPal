import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
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
