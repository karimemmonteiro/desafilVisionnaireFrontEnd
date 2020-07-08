import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';

export default class Cliente extends Component {
  state = {
    cliente:{}
  };

  componentDidMount(){
    const{id} = this.props.match.params;

    fetch(`http://localhost:3003/sistema/cliente/${id}`)
    .then(cliente =>
    cliente.json().then(cliente => this.setState({cliente}))
    )
  }
  render(){
    const {cliente} = this.state;

    return(
      <div className="cliente-info">
        <label htmlFor="">ID: </label>
        <h1>{cliente.id}</h1><br/>

        <label htmlFor="">Nome: </label>
        <h1>{cliente.nome}</h1><br/>

        <label htmlFor="">CPF: </label>
        <h1>{cliente.cpf}</h1><br/>

        <label htmlFor="">Data de Nascimento</label>
        <h1>{cliente.dataNascimento}</h1><br/>

        <label htmlFor="">Criado: </label>        
        <h1>{cliente.createdAt}</h1><br/>

        <label htmlFor="">Atualizado</label>
        <h1>{cliente.updatedAt}</h1>  <br/>
        <br/>         
        <div className="icones">     
      <Link to={`/clientes`}><img src="https://image.flaticon.com/icons/svg/2919/2919590.svg" alt=""/></Link>
      <Link to={`/editarCliente/${cliente.id}`}><img src="https://image.flaticon.com/icons/svg/929/929472.svg" alt=""/></Link>
      <Link to={`/deletarCliente/${cliente.id}`}><img src="https://image.flaticon.com/icons/svg/61/61391.svg" alt=""/></Link>
      </div>
      </div>
    )
  }
}