import style from '../Lista.module.scss';

// Function component
// nao necessita chamar o import React
// nao esquecer de usar o return

export default function Item({tarefa, tempo}: {tarefa: string, tempo: string}) { // define o props para tarefa e tempo e defome e define como string
    return(
    <li className={style.item}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
    )
}