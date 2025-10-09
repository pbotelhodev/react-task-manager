import styles from "./Listas.module.css";
import { Check, Trash2, Info } from "lucide-react";
import { useState } from "react";

function Listas({ dbase }) {
  if (dbase.length === 0) {
    return <p>Não há tarefas cadastradas.</p>;
  }

  const [expandedTaskId, setExpandedTaskId] = useState("");

  function onClickInfo(id) {
    if (id === expandedTaskId) {
      setExpandedTaskId(null);
    } else {
      setExpandedTaskId(id);
    }
  }

  return dbase.map((item) => (
    <article key={item.id} className={styles.card}>
      <div className={styles.mainRow}>
        <h3 className={styles.title}>{item.text}</h3>
        <div className={styles.divButton}>
          <button
            onClick={() => onClickInfo(item.id)}
            className={`${styles.button} ${styles.buttonMoreInfo}`}
          >
            <Info />
          </button>
          <button
            className={`${styles.button} ${styles.buttonCheck}`}
          >
            <Check />
          </button>
          <button
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