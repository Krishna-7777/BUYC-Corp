import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
function App() {
  return ( <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path="/" element={<div>Home Page</div>}  />
    <Route path="/register" element={<div>Register</div>} />
    <Route path="/login" element={<div>Login Page</div>} />
    <Route path="*" element={<div>Page not Found</div>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
