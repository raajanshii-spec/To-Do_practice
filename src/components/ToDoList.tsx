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
  const [editId, setEditId] = useState<number | null>(null);

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

  const handleCheckboxChange = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      }),
    );
  };
  
  const handleDelete = (id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }

  const handleEdit = (data: onetask) => {
    setInputValue(data.text)
    setEditId(data.id)
  }

  const handleUpdate = () => {
    if(editId === null) return;

    setTasks(
      tasks.map((task) =>
        task.id === editId
        ? { ...task, text:inputValue }
        : task
      )
    );
    setInputValue("");
    setEditId(null);
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
        {editId == null ?<button onClick={handleAddTask}>Add Task</button> : <button onClick={handleUpdate}>Update</button>}
        
        
      </div>
      <div className="tasklist">
        <ul>
          {tasks.map((task) => (
            <li key={task.id} >
              <input 
              className="checkboxes"
              type="checkbox"
              checked = {task.isCompleted}
              onChange={() => handleCheckboxChange(task.id)}
              />
              <span style={{ textDecoration : task.isCompleted ? 'line-through' : 'none'}}>{task.text}</span>
              <div className="right">
                <button onClick={() => handleEdit(task)}>Edit</button>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </div>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;
