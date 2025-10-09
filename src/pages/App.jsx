import "../assets/App.css";
import { useEffect, useState } from "react";
import InputTasks from "../components/InputTasks";
import Listas from "../components/Listas";
import { v4 } from "uuid";

function App() {
  useEffect(() => {
    document.title = "Task Manager";
  }, []);

  //Banco de dados inicial
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      text: "Estudar React",
      description: "Ler a documentação oficial e fazer exercícios.",
    },
    {
      id: 2,
      text: "Fazer compras",
      description: "Comprar frutas, legumes e pão.",
    },
  ]);

  //Funcões

  //Incluir nova tarefa
  function onAddTaskList(title, description) {
    const newTask = {
      id: v4(),
      text: title,
      description: description,
    };

    setTarefas((tasks) => [...tasks, newTask]);
  }

  //Deletar tarefa

  //Mais informações

  return (
    <>
      <div>
        <header>
          <h1>Task Manager</h1>
        </header>
        <InputTasks onAddTaskList={onAddTaskList}/>
        <Listas dbase={tarefas} />
      </div>
    </>
  );
}

export default App;
