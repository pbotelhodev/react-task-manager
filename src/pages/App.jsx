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
    { id: v4(), text: "Estudar React", description: "Estudar React na plataforma Gemini", isCompleted: false, isInfoVisible: false },
    { id: v4(), text: "Estudar JavaScript", description: "Estudar JavaScript na plataforma Gemini", isCompleted: false, isInfoVisible: false },
    { id: v4(), text: "Estudar HTML e CSS", description: "Estudar HTML e CSS na plataforma Gemini", isCompleted: false, isInfoVisible: false },
  ]);

  //Funcões

  //Incluir nova tarefa
  function onAddTaskList(title, description) {
    const newTask = {
      id: v4(),
      text: title,
      description: description,
      isCompleted: false,
      isInfoVisible: false,
    };

    setTarefas((tasks) => [...tasks, newTask]);
  }

  //Mais informações

  //Marcar tarefa como concluída
  
  //Deletar tarefa



  

  return (
    <>
      <div id="app" className="container">
        <header>
          <h1>Task Manager</h1>
        </header>
        <InputTasks onAddTaskList={onAddTaskList}/>
        <Listas dbase={tarefas}/>
      </div>
    </>
  );
}

export default App;
