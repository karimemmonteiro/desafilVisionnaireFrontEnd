import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';

export default class Usuario extends Component {
  state = {
    usuario:{}
  };

  componentDidMount(){
    const{id} = this.props.match.params;

    fetch(`http://localhost:3003/sistema/usuarios/${id}`)
    .then(usuario =>
    usuario.json().then(usuario => this.setState({usuario}))
    )
  }
  render(){
    const {usuario} = this.state;

    if(usuario.ativo){
      usuario.ativo = "Ativo"
    }else{
      usuario.ativo = "Desativado"
    }

    return(
      
      <div className="usuario-info">

        <label htmlFor="">ID: </label>
        <h1>{usuario.id}</h1><br/>

        <label htmlFor="">Nome: </label>
        <h1>{usuario.nome}</h1><br/>

        <label htmlFor="">Senha: </label>
        <h1>{usuario.senha}</h1><br/>

        <label htmlFor="">Data de Nascimento: </label>
        <h1>{usuario.dataNascimento}</h1><br/>

        <label htmlFor="">Situação: </label>
        <h1>{usuario.ativo}</h1><br/>

        <label htmlFor="">Criado: </label>
        <h1>{usuario.createdAt}</h1><br/>

        <label htmlFor="">atualizado: </label>
        <h1>{usuario.updatedAt}</h1>  
        <br/><br/>  
        <div className=" icones">     
      <Link to={`/usuarios`}><img src="https://image.flaticon.com/icons/svg/2919/2919590.svg" alt=""/></Link>
      <Link to={`/editarUsuario/${usuario.id}`}><img src="https://image.flaticon.com/icons/svg/929/929472.svg" alt=""/></Link>
      <Link to={`/deletarUsuario/${usuario.id}`}><img src="https://image.flaticon.com/icons/svg/61/61391.svg" alt=""/></Link>
      </div>  
      </div>      
    )
  }
}