import React from 'react';
import UserListStyle from './UserListStyle';

class UserList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            usuarios: []
        };
    }

    atualizar = () => {
        fetch('http://localhost:5000/usuarios').then(resposta => {
            return resposta.json()
        }).then(dados => {
            this.setState({
                usuarios: dados.usuarios
            });
        })
    }

    componentDidMount = () => {
        this.atualizar();
        // setInterval(this.atualizar, 10000)
    }

    render() {
        return (
            <div style={UserListStyle.divDeFora}>
                <div style={UserListStyle.cabecalho}>
                    <h3>Nome</h3>
                    <h3>E-mail</h3>
                </div>
                <ol style={UserListStyle.lista}>
                    {this.state.usuarios.map((item, pos) => {
                        return (
                            <li key={pos} style={UserListStyle.item}>
                                <p>{item.nome}</p>
                                <p>{item.email}</p>
                            </li>
                        )
                    })}
                </ol>
            </div>
        );
    }
}

export default UserList;