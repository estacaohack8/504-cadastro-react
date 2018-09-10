import React from 'react';

class Botao extends React.Component {
    clique = () => {
        this.props.clique(this.props.numero);
    }

  render() {
    return <button onClick={this.clique}>{this.props.texto}</button> ;
  }
}

export default Botao;