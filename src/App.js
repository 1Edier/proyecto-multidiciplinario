// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bebidas from './components/pages/Refrescos';
import PaginaPrincipal from './components/pages/Principal';

import NavBar from './components/moleculas/NavBar';
import Logo from './img/logo.png';
import './css/App.css';
import './css/Cards.css';

const Datos = {
  NavBar: [
    {
      logosrc: Logo,
      logoWidth: "170",
      logoHeight: "110",
      titulo1: "titulo_blanco",
      titulo: "Taco Facil",
      ClassName: "boton4",
    },
    {
      redirecciones: "/",
      text: "Tacos",
      ClassName: "card-btn2",
    },
    {
      redirecciones: "/Bebidas",
      text: "Refresco",
      ClassName: "card-btn2",
    },
    {
      redirecciones: "/minecraft",
      text: "Ventas",
      ClassName: "card-btn2",
    },
    {
      redirecciones: "/minecraft",
      text: "Pedidos",
      ClassName: "card-btn2",
    },
  ],
};

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar datos={Datos.NavBar} />
 
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
        
          <Route path="/Bebidas" element={<Bebidas />} />
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
