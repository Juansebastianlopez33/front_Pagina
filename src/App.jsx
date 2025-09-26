import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Contexto y Rutas Protegidas
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute'; 

// Componentes y Páginas
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login/loginpage';
import Register from './pages/Register/Register';
import Verification from './pages/Verification/Verification';
import BlogPage from './pages/Blog/BlogPage';
import About from './pages/About/about';
import Player from './pages/Player/Player';
<<<<<<< HEAD
import GuiaJuego from "./pages/guiaJuego/guia_juego.jsx";
import GameSetupModal from './components/GameSetupModal/GameSetupModal'; 
=======

// ¡NUEVA IMPORTACIÓN!
import GameSetupModal from './components/GameSetupModal/GameSetupModal'; // ¡Importa el nuevo componente Modal!
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2

const App = () => {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        {/* --- Rutas Públicas --- */}
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/guia" element={< GuiaJuego />} />
=======
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verificar" element={<Verification />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<About />} />

        {/* --- Rutas Protegidas --- */}
        <Route element={<ProtectedRoute />}>
          <Route path="/player" element={<Player />} />        
<<<<<<< HEAD
=======
          {/* ¡CAMBIO AQUÍ! La ruta /juego ahora carga el MODAL de configuración */}
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
          <Route path="/juego" element={<GameSetupModal />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;