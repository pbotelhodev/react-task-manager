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

  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("Task")) || []
  );

  useEffect(() => {
    localStorage.setItem("Task", JSON.stringify(task));
  }, [task]);
  //Funcões

  //Incluir nova tarefa
  function onAddTaskList(title, description) {
    const newTask = {
      id: v4(),
      isCompleted: false,
      text: title,
      description: description,
      
    };

    setTask((tasks) => [...tasks, newTask]);
  }

  //Marcar tarefa como concluída
  function onCheckTask(id) {
    const newTask = task.map((task) => {
      if (task.id === id) {
        if (task.isCompleted === true) {
          return { ...task, isCompleted: false };
        } else{
          return { ...task, isCompleted: true};
        }
      }
      return task;
    });
    setTask(newTask);
    console.log(task.isCompleted);
  }

  //Deletar tarefa
  function onDeleteTask(id) {
    const newTask = task.filter((task) => task.id !== id);
    setTask(newTask);
  }

  return (
    <>
      <div id="app" className="container">
        <header>
          <h1>Task Manager</h1>
        </header>
        <InputTasks onAddTaskList={onAddTaskList} />
        <Listas dbase={task} onDeleteTask={onDeleteTask} onCheckTask={onCheckTask}/>
        
      </div>
    </>
  );
}

export default App;
