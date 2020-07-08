import React from 'react';
import './header.css';

const Header = () => (
  <header id="main-header"> 
    <img src={require('../../img/logo.png')} />    
    <a href="http://localhost:3000/usuarios">Usuario</a>
    <a href="http://localhost:3000/clientes">Cliente</a>
    <a href="http://localhost:3000/produto">Produtos</a>
    <a href="http://localhost:3000/pedido">Pedidos</a>
  </header>  
);

export default Header;