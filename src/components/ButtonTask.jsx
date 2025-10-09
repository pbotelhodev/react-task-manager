import { Check, Trash2, Info} from "lucide-react";
import styles from "./Listas.module.css";

function ButtonTask() {
  return (
    <div className={styles.divButton}>
      <button className={`${styles.button} ${styles.buttonMoreInfo}`}>
        <Info/>
      </button>
      <button className={`${styles.button} ${styles.buttonCheck}`}>
        <Check />
      </button>
      <button className={`${styles.button} ${styles.buttonTrash}`}>
        <Trash2 />
      </button>
    </div>
  );
}

export default ButtonTask;
