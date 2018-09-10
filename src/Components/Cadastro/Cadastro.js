import React from 'react';
import CadastroStyle from './CadastroStyle';

class Cadastro extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: ''
        }
    }

    atualizarSenha = evento => {
        this.setState({
            senha: evento.target.value
        });
    }

    atualizarEmail = evento => {
        this.setState({
            email: evento.target.value
        });
    }

    atualizarNome = evento => {
        this.setState({
            nome: evento.target.value
        });
    }

    cadastrar = () => {
        fetch('http://localhost:5000/usuario/novo', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(resposta => {
            return resposta.json()
        }).then(dados => {
            console.log(dados);
        })
    }

  render() {
      console.log(this.state);
    return (
        <div style={CadastroStyle.divDeFora}>
            <input onChange={this.atualizarNome} value={this.state.nome} type="text" placeholder="Digite o nome" />
            <input onChange={this.atualizarEmail} value={this.state.email} type="email" placeholder="Digite o email" />
            <input onChange={this.atualizarSenha} value={this.state.senha} type="password" placeholder="Digite a senha" />
            <button onClick={this.cadastrar}>Cadastrar</button>
        </div>
    );
  }
}

export default Cadastro;