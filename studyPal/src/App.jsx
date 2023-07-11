import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import AuthModal from './pages/Auth/AuthModal';
import Dashboard from './pages/Dashboard/Dashboard';
import MasterLayout from './Routes/MasterLayout/MasterLayout';
import CreateSet from './pages/CreateSet/CreateSet';
import EditSet from './pages/Edit/EditSet';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import StudySet from './pages/Study/StudySet';
import './App.css'
import User from './pages/User/User';

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
          <Route path='/editSet/:id' element={<EditSet />}/>
          <Route path='/studySet/:id' element={<StudySet />}/>
          <Route path='/user/me' element={<User />}/>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
