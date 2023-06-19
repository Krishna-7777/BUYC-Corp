import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

function NavBar() {
  const data = localStorage.getItem("type");
  const token = localStorage.getItem("token");
  const navigate=useNavigate()
  const [isLogin, setIsLogin] = useState(!!token); // Using !! to convert token to boolean

  const handleLogout = () => {
    localStorage.clear();
    setIsLogin(!isLogin)
    navigate("../")
    document.location.reload()
  };

  return (
    <>
      <Link to="/">Home</Link>
      {isLogin && <Link to="/market-place">Market Place</Link>}
      {isLogin && data === 'dealer' && <Link to="/sell-cars">Sell Cars</Link>}
      {!isLogin && <Link to="/login">Login</Link>}
      {!isLogin && <Link to="/register">Register</Link>}
      {isLogin && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </>
  );
}

export default NavBar;
