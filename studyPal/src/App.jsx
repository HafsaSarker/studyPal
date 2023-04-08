import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Dashboard from './pages/Dashboard/Dashboard';
import Layout from './Routes/Layout/Layout';
import './App.css'

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Navbar />
      

      <Routes>
        <Route path='/' element={<Layout />}>

          <Route index element={
            <HomePage 
              isLoggedIn={isLoggedIn} 
              setIsLoggedIn={setIsLoggedIn}
            />}
          />

          <Route path='/dashboard' element={<Dashboard />}/>

        </Route>
      </Routes>
    </div>
  )
}

export default App
