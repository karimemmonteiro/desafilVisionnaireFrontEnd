import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './styles.css';


export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      produtos: []
    }
  }
  componentDidMount(){
    fetch(`http://localhost:3003/sistema/produto`)
    .then(produtos =>
      produtos.json().then(produtos => this.setState({produtos}))
      )
  }
  render() {
    const {produtos} = this.state;

    return produtos.map((produtos, index) => (
      <div className="container">

        <div className="produtos-list">
        <div className="add"><a href="/criarProduto">Adicionar</a></div>
          <div key={index}>            
             <article>
                
                <label htmlFor="">Nome: </label>
                <h5>{produtos.nome}</h5><br/>
                
                <label htmlFor="">Preço R$: </label>
                <strong>{produtos.preco}</strong><br/><br/>              

                <p><Link to={`/produto/${produtos.id}`}>Detalhes</Link></p>
                <br/>
              </article>
          </div>

        </div>

      </div>
    )
    )
    
  }
}