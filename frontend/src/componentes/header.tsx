import React, { useState } from 'react';
import '../App.css';
import {Link} from "react-router-dom"
import {authUser} from "../context/userContext"


const Header: React.FC = () => {

  const {remove,autentication}=authUser()



  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">MiCrud</div>
        <nav className="nav-links">
         {!autentication&&(
          <>
          <Link to="/">register</Link>
          <Link to="/login">login</Link>
          </>
           )}
          
          <Link onClick={()=>remove()}>cerrar seccion</Link>
        </nav>
        <div className="menu-btn" onClick={toggleSidebar}>
          ☰
        </div>
      </header>

      <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
        <a href="#" onClick={toggleSidebar}>X</a>
        
         
          <Link to="/">register</Link>
          <Link to="/login">login</Link>
          <Link onClick={()=>remove()}>cerrar seccion</Link>
        
      </div>
    </>
  );
};

export default Header;
