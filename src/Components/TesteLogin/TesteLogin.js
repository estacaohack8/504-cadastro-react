import React from 'react';
import TesteLoginStyle from './TesteLoginStyle';

class TesteLogin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            logado: false,
            nome: '',
            senha: ''
        }
    }

    atualizarSenha = evento => {
        this.setState({
            senha: evento.target.value
        });
    }

    atualizarNome = evento => {
        this.setState({
            nome: evento.target.value
        });
    }

    testar = () => {
        fetch('http://localhost:5000/usuario/login', {
            method: 'POST',
            body: JSON.stringify({
                nome: this.state.nome,
                senha: this.state.senha
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(resposta => {
            return resposta.json()
        }).then(dados => {
            console.log(dados);
            if(dados.login){
                this.setState({
                    logado: true
                })
            }
            else{
                this.setState({
                    logado: false
                });
            }
        })
    }

  render() {
      console.log(this.state);
    return (
        <div style={TesteLoginStyle.divDeFora}>
            <input onChange={this.atualizarNome} value={this.state.nome} type="text" placeholder="Digite o nome" />
            <input onChange={this.atualizarSenha} value={this.state.senha} type="password" placeholder="Digite a senha" />
            <button onClick={this.testar}>Teste de Login</button>
            {this.state.logado ? <p>USUARIO LOGADO</p> : <p>USUARIO NÃO LOGADO</p>}
        </div>
    );
  }
}

export default TesteLogin;