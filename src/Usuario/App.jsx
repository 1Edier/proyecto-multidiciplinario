import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/organisms/header";
import Inicio from "./pages/inicio";
import Tacos from "./pages/tacos";
import Refrescos from "./pages/refresco";
import Footer from "./components/organisms/footer";
import idiomas from "./informacion";
import "./App.css";

function App() {
  const [idioma, setIdioma] = useState(() => {
    const idiomaGuardado = localStorage.getItem("Idioma");
    return idiomaGuardado || "es";
  });

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("ModoOscuro") === "true" ? true : false
  );

  const [txtIdioma, setTxtIdioma] = useState(idiomas[idioma]);
  const [menuMobile, setMenuMobile] = useState(false); // Estado para controlar el menú móvil

  const bodyOverflowHidden = () => {
    document.body.classList.toggle("overflow--hidden");
  };

  const cambiarIdioma = (nuevoIdioma) => {
    setIdioma(nuevoIdioma);
    localStorage.setItem("Idioma", nuevoIdioma);
    setTxtIdioma(idiomas[nuevoIdioma]);
  };

  const cambiarModo = () => {
    const modo = !darkMode;
    setDarkMode(modo);
    localStorage.setItem("ModoOscuro", modo);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setMenuMobile(!menuMobile); // Cambia el estado del menú móvil al contrario de su valor actual
    bodyOverflowHidden(); // Aplica la lógica para ocultar el desbordamiento del cuerpo aquí si es necesario
  };

  return (
    <Router>
      <main className={`App ${darkMode ? "dark-mode" : ""}`}>
        <Header
          cambiarModo={cambiarModo}
          darkMode={darkMode}
          cambiarIdioma={cambiarIdioma}
          txtIdioma={txtIdioma}
          bodyOverflowHidden={bodyOverflowHidden}
          toggleMenu={toggleMenu} 
        />

        {/* Rutas */}
        <Routes>
  <Route path="/" element={<Inicio txtIdioma={txtIdioma} />} />
  <Route path="/tacos" element={<Tacos txtIdioma={txtIdioma} />} />
  <Route path="/refrescos" element={<Refrescos txtIdioma={txtIdioma} />} />
</Routes>


        <Footer txtIdioma={txtIdioma} />
      </main>
    </Router>
  );
}

export default App;
