import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './styles.css';


export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      cliente: []
    }
  }
  componentDidMount(){
    fetch(`http://localhost:3003/sistema/cliente`)
    .then(cliente =>
      cliente.json().then(cliente => this.setState({cliente}))
      )
  }
  render() {
    const {cliente} = this.state;

    return cliente.map((cliente, index) => (
      <div className="container">        

        <div className="cliente-list">
          <div className="add"><a href="/criarCliente">Adicionar</a></div>
        
          <div key={index}>            
             <article>               

                <label htmlFor="">Nome</label>
                <h5>{cliente.nome}</h5><br/>                
                <p><Link to={`/clientes/${cliente.id}`}>Detalhes</Link></p>              
                
               

              </article>
          </div>

        </div>

      </div>
    )
    )
    
  }
}