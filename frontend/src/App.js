import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Register from './components/Register';
import Login from './components/Login';
function App() {
  return ( <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path="/" element={<div>Home Page</div>}  />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<div>Page not Found</div>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
