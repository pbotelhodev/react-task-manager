import styles from "./Listas.module.css";
import { Check, Trash2, Info } from "lucide-react";
import { useState } from "react";

function Listas({ dbase, onDeleteTask, onCheckTask }) {
  //Estados(States)
  const [expandedTaskId, setExpandedTaskId] = useState(null);

  //Condicões(conditions)
  if (dbase.length === 0) {
    return <p className={styles.nullSubtitle}>Não há tarefas cadastradas.</p>;
  }

  //Funções(functions)
  //Função para alternar a visibilidade da descrição da tarefa
  function onClickInfo(id) {
    if (id === expandedTaskId) {
      setExpandedTaskId(null);
    } else {
      setExpandedTaskId(id);
    }
  }

  function onDelete(id) {
    onDeleteTask(id);
  }

  function onCheck(id) {
    onCheckTask(id);
    }
  return dbase.map((item) => (
    <article key={item.id} className={styles.card}>
      <div className={styles.mainRow}>
        <h3 className={`styles.title ${item.isCompleted === true ? styles.check : null}`}>{item.text}</h3>
        <div className={styles.divButton}>
          <button
            onClick={() => onClickInfo(item.id)}
            className={`${styles.button} ${styles.buttonMoreInfo}`}
          >
            <Info />
          </button>
          <button
          onClick={() => onCheck(item.id)}
            className={`${styles.button} ${styles.buttonCheck}`}
          >
            <Check />
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className={`${styles.button} ${styles.buttonTrash}`}
          >
            <Trash2 />
          </button>
        </div>
      </div>
      {expandedTaskId === item.id && (
        <div className={styles.description}>
          <p>{item.description}</p>
        </div>
      )}
    </article>
  ));
}

export default Listas;
