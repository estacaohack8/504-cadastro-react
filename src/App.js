import React from 'react';
import UserList from './Components/UserList/UserList';
import Cadastro from './Components/Cadastro/Cadastro';
import Delete from './Components/Delete/Delete';
import TesteLogin from './Components/TesteLogin/TesteLogin';
import Botao from './Components/Botao/Botao';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      exibir: <UserList />
    }
    this.botoes = ['Listar Usuários', 'Cadastrar', 'Remover'];
    this.paginas = [<UserList />, <Cadastro />, <Delete />];
  }

  mudarPagina = numero => {
    console.log(numero);
    this.setState({
      exibir: this.paginas[Number(numero)]
    });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Controle de Usuarios</h1>
          <nav>
            {this.botoes.map((item, pos) => {
              return <Botao key={pos} clique ={this.mudarPagina} numero={pos} texto={item} />
            })}
          </nav>
        </header>
        {this.state.exibir}
      </div>
    ) ;
  }
}

export default App;