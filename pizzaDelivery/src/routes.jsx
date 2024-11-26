import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Cardapio from "./pages/Cardapio";
import Opinioes from "./pages/Opinioes";
import Login from "./pages/Login";
import LoginAtendente from "./pages/LoginAtendente";
import CadastroProduto from "./pages/CadastroProduto";
import Pedidos from "./pages/Pedidos";

export default function routes(params) {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/loginAtendente" element={<LoginAtendente />} />
        <Route path="/cadastroProduto" element={<CadastroProduto />} />
        <Route path="/opinioes" element={<Opinioes />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </Router>
  )
}