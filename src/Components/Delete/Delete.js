import React from 'react';
import DeleteStyle from './DeleteStyle';

class Delete extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nome: ''
        }
    }

    atualizarNome = evento => {
        this.setState({
            nome: evento.target.value
        });
    }

    remover = () => {
        fetch(`http://localhost:5000/usuario/remover/${this.state.nome}`, {
            method: 'DELETE'
        }).then(resposta => {
            return resposta.json()
        }).then(dados => {
            console.log(dados);
        })
    }

  render() {
      console.log(this.state);
    return (
        <div style={DeleteStyle.divDeFora}>
            <input onChange={this.atualizarNome} value={this.state.nome} type="text" placeholder="Digite o nome" />
            <button onClick={this.remover}>Remover</button>
        </div>
    );
  }
}

export default Delete;