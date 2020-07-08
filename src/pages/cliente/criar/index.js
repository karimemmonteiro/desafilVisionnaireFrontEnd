import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './index.css';

class CriarCliente extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientes: {
        nome: "",
        cpf: "",
        dataNascimento: "",
      },
      redirect: false
    }
  }
  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/clientes" />

    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Adicionar Cliente</legend>

            <div className="cliente-insert">
              <label htmlFor="nome">Nome</label><br />
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite o nome"
                required
                value={this.state.clientes.nome}
                onChange={this.handleImputChange}
              />
            </div>

            <div className="cliente-insert">
              <label htmlFor="cpf">CPF</label><br />
              <input
                type="number"
                id="cpf"
                name="cpf"
                placeholder="Digite o cpf"
                required
                value={this.state.clientes.cpf}
                onChange={this.handleImputChange}
              />

              <div className="cliente-insert">
                <label htmlFor="dataNascimento">Data de nascimento</label><br />
                <input
                  type="datet"
                  id="dataNascimento"
                  name="dataNascimento"
                  placeholder="Digite data de nascimento"
                  required
                  value={this.state.clientes.dataNascimento}
                  onChange={this.handleImputChange}
                />
              </div>
             
            </div>
            <button type="submit">Cadastrar</button>
          </fieldset>
        </form>
      )
    }

  }

  handleImputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value

    this.setState(prevState => ({
      clientes: {...prevState.clientes, [name]: value}
    }));
  }
  handleSubmit = event => {
    fetch("http://localhost:3003/sistema/cliente",{
      method: "post",
      body: JSON.stringify(this.state.clientes),
      headers:{
        "Content-type": "application/json"
      }
    })
    .then(data => {
      if(data.ok){
        this.setState({redirect:true})
      }
    })

    event.preventDefault();
  }
}
export default CriarCliente;