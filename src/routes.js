import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainUsuario from '../src/pages/main';
import MainCliente from '../src/pages/cliente/main/index';
import MainProduto from '../src/pages/produto/main/index';
import MainPedido from '../src/pages/pedido/main/index';

import DetalUsuario from '../src/pages/usuario/detalhes/index';
import DetalCliente from '../src/pages/cliente/detalhes/index';
import DetalProduto from '../src/pages/produto/detalhes/index';
import DetalPedido from '../src/pages/pedido/detalhes/index';

import CriarCliente from '../src/pages/cliente/criar/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path = "/usuarios" component={MainUsuario}/> 
      <Route path = "/usuarios/:id" component={DetalUsuario}/>         
    </Switch>

    <Switch>
      <Route exact path = "/clientes" component={MainCliente}/> 
      <Route path = "/clientes/:id" component={DetalCliente}/> 
      <Route path = "/criarCliente/" component={CriarCliente}/>        
    </Switch>

    <Switch>
      <Route exact path = "/produto" component={MainProduto}/>
      <Route path = "/produto/:id" component={DetalProduto}/>       
    </Switch>

    <Switch>
      <Route exact path = "/pedido" component={MainPedido}/>
      <Route path = "/pedido/:id" component={DetalPedido}/>        
    </Switch>

  </BrowserRouter>
)

export default Routes;