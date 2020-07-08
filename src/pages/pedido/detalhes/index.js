import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';

export default class Pedido extends Component {
  state = {
    pedido:{}
  };

  componentDidMount(){
    const{id} = this.props.match.params;

    fetch(`http://localhost:3003/sistema/pedido/${id}`)
    .then(pedido =>
    pedido.json().then(pedido => this.setState({pedido}))
    )
  }
  render(){
    const {pedido} = this.state;

    return(
      <div className="pedido-info">
        <label htmlFor="">ID: </label>
        <h1>{pedido.id}</h1><br/>

        <label htmlFor="">Cliente: </label>
        <h1>{pedido.cliente}</h1><br/>

        <label htmlFor="">Total da compra: </label>
        <h1>{pedido.totalDaCompra}</h1><br/>

        <label htmlFor="">Data da compra</label>
        <h1>{pedido.dataDaCompra}</h1><br/>
        
        <br/>         
        <div className="icones">     
      <Link to={`/pedido`}><img src="https://image.flaticon.com/icons/svg/2919/2919590.svg" alt=""/></Link>
      <Link to={`/editarPedido/${pedido.id}`}><img src="https://image.flaticon.com/icons/svg/929/929472.svg" alt=""/></Link>
      <Link to={`/deletarPedido/${pedido.id}`}><img src="https://image.flaticon.com/icons/svg/61/61391.svg" alt=""/></Link>
      </div>
      </div>
    )
  }
}