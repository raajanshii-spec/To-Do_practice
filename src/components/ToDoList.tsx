import { useState } from "react";
import "../App.css";

type onetask = {
    id: number
    text: string
    isCompleted: boolean
}

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
        isCompleted: false
    };


    setTasks([...tasks, newTask]);
    setInputValue("");

  };
 console.log("tasks", tasks);
 


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
            {tasks.map((task) =>(
                <li key={task.id}>
                    <input type="checkbox" />
                    <span>{task.text}</span>
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
