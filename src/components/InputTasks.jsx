import { useForm } from "react-hook-form";
import styles from "./InputTasks.module.css";

function InputTasks(props) {
  const { register, handleSubmit, reset} = useForm();


  const onSubmit = (data) => {
    console.log("Dados do form: ", data);
    const title = data.titleTask;
    const description = data.descriptionTask;
    props.onAddTaskList(title, description);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formTask}>
      <input
        maxLength={30}
        id="titleTask"
        type="text"
        placeholder="Insíra o título da tarefa"
        {...register("titleTask", { required: "O título é obrigatória" })}
      />
      <input
        type="text"
        id="descriptionTask"
        placeholder="Insira a descrição da sua task"
        {...register("descriptionTask", { required: "A descrição é obrigatória" })}
      />
      
      <button type="submit">Adicionar task</button>
    </form>
  );
}

export default InputTasks;
