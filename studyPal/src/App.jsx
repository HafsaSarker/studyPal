import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import AuthModal from './pages/Auth/AuthModal';
import Dashboard from './pages/Dashboard/Dashboard';

import MasterLayout from './Routes/MasterLayout/MasterLayout';

import './App.css'
import CreateSet from './pages/CreateSet/CreateSet';

function App() {
const [logIn, setLogIn] = useState(true);


  return (
    <div className="App">    
      <Routes>
        <Route path='/' element={<MasterLayout />}>

          <Route index element={
            <AuthModal 
              logIn={logIn} 
              setLogIn={setLogIn}
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
