import React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';

class Formulario extends React.Component {
// sempre um objeto
state={
  tarefa: "",
  tempo: "00:00"
}
// criando função
// explica que existe um evento
// mostra que o evento é um Formulario HTML
adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
  // padrao do JScript
  evento.preventDefault();

}

  render() {
    return (
                                           // chamando função criada anteriormente, depois associa ao This
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            // utiliza o state igual usa o props (na hora de chamar)
            value={this.state.tarefa}
            // chamando função
            // evento é o parametro da ArrowFunction
            // setState é padrao do React
            onChange={evento => this.setState({...this.state, tarefa:evento.target.value})}
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            name="tempo"
            // utiliza o state igual usa o props (na hora de chamar)
            value={this.state.tempo}
            // chamando função
            // evento é o parametro da ArrowFunction
            // setState é padrao do React
            onChange={evento => this.setState({...this.state, tempo: evento.target.value})} // spreed do state {...}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao type="submit">
          Adicionar
        </Botao>
      </form>
    )
  }
}

export default Formulario;