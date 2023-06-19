import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Register from './components/Register';
import Login from './components/Login';
import SellCar from './components/SellCar';
import MarketPLace from './components/MarketPLace';
function App() {
  return ( <BrowserRouter>
    <NavBar />
    <hr/>
    <Routes>
    <Route path="/home" element={<div>Home Page</div>}  />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/sell-cars" element={<SellCar />} />
    <Route path="/market-place" element={<MarketPLace />} />
    <Route path="*" element={<div>Page not Found</div>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
