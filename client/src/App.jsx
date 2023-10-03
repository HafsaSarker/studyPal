import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import AuthModal from "./pages/Auth/AuthModal";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateSet from "./pages/CreateSet/CreateSet";
import EditSet from "./pages/Edit/EditSet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudySet from "./pages/Study/StudySet";
import "./App.css";
import User from "./pages/User/User";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AuthModal />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createSet" element={<CreateSet />} />
          <Route path="/editSet/:id" element={<EditSet />} />
          <Route path="/studySet/:id" element={<StudySet />} />
          <Route path="/user/me" element={<User />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
