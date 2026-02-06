import { useState, useId } from "react";
import "../App.css";

type onetask = {
  id: number;
  text: string;
  isCompleted: boolean;
};

function ToDo() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<onetask[]>([]);

  const handleInput = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue == "") return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
    setInputValue("");
  };
  const handleCheckboxChange = (id: any) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      }),
    );
  };
  
  
  return (
    <div className="container">
      <div className="title">
        <h1>My List</h1>
      </div>
      <div className="input-add">
        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
          placeholder="Add your tasks"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="tasklist">
        <ul>
          {tasks.map((task) => (
            <li key={task.id} >
              <input 
              type="checkbox"
              checked = {task.isCompleted}
              onChange={() => handleCheckboxChange(task.id)}
              />
              <span style={{ textDecoration : task.isCompleted ? 'line-through' : 'none'}}>{task.text}</span>
              <button>Edit</button>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;
