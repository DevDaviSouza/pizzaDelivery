import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Cardapio from "./pages/Cardapio";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import LoginAtendente from "./pages/Login";
import CadastroProduto from "./pages/CadastroProduto";
import Pedidos from "./pages/Pedidos";
import PedidosCliente from "./pages/PedidosCliente";
import Carrinho from "./pages/Carrinho";
import CadastroCliente from "./pages/CadastroCliente";

export default function routes(params) {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/pedidoscliente" element={<PedidosCliente />} />
        <Route path="/cadastro" element={<CadastroCliente />} />
        <Route path="/loginAtendente" element={<LoginAtendente />} />
        <Route path="/cadastroProduto" element={<CadastroProduto />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </Router>
  )
}