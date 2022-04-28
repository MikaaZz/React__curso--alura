import React, { useState } from 'react';
import Item from './Item';
import style from './Lista.module.scss';

function Lista() {
  // array com os dados
  // definindo os idexs. pode ser posto qualquer valor
  const [tarefas, setTarefas] = useState([{
    tarefa: 'React',
    tempo: '02:00:00'
  }, {
    tarefa: 'Javascript',
    tempo: '01:00:00'
  }, {
    tarefa: "Typescript",
    tempo: "03:00:00"
  }]);
  return (
    <aside className={style.listaTarefas}>
      <h2 onClick={() => {
        setTarefas([...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00" }]);
      }}> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            // props padrao do React para conversar com o DOM Real
            key={index}
            // usando todos os atributos dentro do objeto como prop para o componente
            // tomar cuidado se infos vierem de API pois pode dar erro
            {...item}
          // ou
          //tarefa={item.tarefa}
          //tempo={item.tempo}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;