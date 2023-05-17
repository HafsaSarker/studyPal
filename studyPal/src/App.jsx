import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Dashboard from './pages/Dashboard/Dashboard';

import MasterLayout from './Routes/MasterLayout/MasterLayout';

import './App.css'
import CreateSet from './pages/CreateSet/CreateSet';

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div className="App">    
      <Routes>
        <Route path='/' element={<MasterLayout />}>

          <Route index element={
            <HomePage 
              isLoggedIn={isLoggedIn} 
              setIsLoggedIn={setIsLoggedIn}
            />}
          />

          <Route path='/dashboard' element={<Dashboard />}/>

          <Route path='/createSet' element={<CreateSet />}/>

        </Route>
      </Routes>
    </div>
  )
}

export default App
