import React from 'react';
import styles from './Lista.module.css'

function Lista({ tarefa, alternarConclusao, removerTarefa }) {
    return (
        <li className='(styles.item)' >
            <span
                onClick={() => alternarConclusao
                    (tarefa.id)}
                className={tarefa.concluida ? styles.concluida : ''} >

                    {tarefa.texto}

            </span>
            <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
        </li>
    );
}