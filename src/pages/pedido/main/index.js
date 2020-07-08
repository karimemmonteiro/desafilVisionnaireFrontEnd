import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      pedido: []
    }
  }
  componentDidMount(){
    fetch(`http://localhost:3003/sistema/pedido`)
    .then(pedido =>
      pedido.json().then(pedido => this.setState({pedido}))
      )
  }
render() {
  const {pedido} = this.state;

  return pedido.map((pedido, index) => (
      <div className="pedido-list">
        <div className="add"><a href="/criarPedido">Adicionar</a></div>
        <div key={index}>            
            <article>
            
            <label htmlFor="">Cliente: </label><br/>
            <strong>{pedido.cliente}</strong>
            <br/><br/>

            <label htmlFor="">Total da compra R$: </label><br/>
            <strong>{pedido.totalDaCompra}</strong>
            <br/><br/>  

            <p><Link to={`/pedido/${pedido.id}`}>Detalhes</Link></p>
            <br/>

            </article>
        </div>
      </div>
  )
  )
  
}
}