import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';

export default class Produtos extends Component {
  state = {
    produtos:{}
  };

  componentDidMount(){
    const{id} = this.props.match.params;

    fetch(`http://localhost:3003/sistema/produto/${id}`)
    .then(produtos =>
      produtos.json().then(produtos => this.setState({produtos}))
    )
  }
  render(){
    const {produtos} = this.state;

    return(
      <div className="produto-info">
        <label htmlFor="">ID: </label>
        <h1>{produtos.id}</h1><br/>

        <label htmlFor="">SKU: </label>
        <h1>{produtos.id}</h1><br/>

        <label htmlFor="">Nome: </label>
        <h1>{produtos.nome}</h1><br/>

        <label htmlFor="">Descrição: </label>
        <h1>{produtos.descricao}</h1><br/>

        <label htmlFor="">Preço</label>
        <h1>{produtos.preco}</h1><br/>

        <label htmlFor="">Quantidade</label>
        <h1>{produtos.quantidade}</h1><br/>

        <label htmlFor="">Criado: </label>        
        <h1>{produtos.createdAt}</h1><br/>

        <label htmlFor="">Atualizado</label>
        <h1>{produtos.updatedAt}</h1>  <br/>
        <br/>         
        <div className="icones">     
      <Link to={`/produto`}><img src="https://image.flaticon.com/icons/svg/2919/2919590.svg" alt=""/></Link>
      <Link to={`/editarProduto/${produtos.id}`}><img src="https://image.flaticon.com/icons/svg/929/929472.svg" alt=""/></Link>
      <Link to={`/deletarProduto/${produtos.id}`}><img src="https://image.flaticon.com/icons/svg/61/61391.svg" alt=""/></Link>
      </div>
      </div>
    )
  }
}