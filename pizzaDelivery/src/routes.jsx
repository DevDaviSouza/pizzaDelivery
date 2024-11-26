import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Cardapio from "./pages/Cardapio";
import Opinioes from "./pages/Opinioes";
import Login from "./pages/Login";
import LoginAtendente from "./pages/LoginAtendente";

export default function routes(params) {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loginAtendente" element={<LoginAtendente />} />
        <Route path="/opinioes" element={<Opinioes />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </Router>
  )
}