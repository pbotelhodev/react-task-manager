import styles from "./Listas.module.css";
import ButtonTask from "./ButtonTask";

function Listas({ dbase }) {
  return dbase.map((item) => (
    <article id="articleCard" key={item.id} className={styles.card}>
      <h3 className={styles.title}>{item.text}</h3>
      <ButtonTask/>
    </article>
  ));
}

export default Listas;