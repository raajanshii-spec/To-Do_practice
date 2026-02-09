import { useState, useId, useEffect } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask, checkTask, deleteTask, editTask } from "../utils/taskSlice";

type onetask = {
  id: number;
  text: string;
  isCompleted: boolean;
};

function ToDo() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<onetask[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const taskList = useSelector((state: any) => state.tasks);

  console.log(taskList);
  

  const handleInput = (e: any) => {
    setInputValue(e.target.value);
  };

  const dispatch = useDispatch();
  const handleAddTask = () => {

    dispatch(addTask({
      id: Date.now(),
      text: inputValue,
      isCompleted: false,
    }))
    setInputValue("");
  };

  const handleCheckboxChange = (id: number) => {
    dispatch(checkTask(id));
  };
  
  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  }

  const handleEdit = (data: onetask) => {
    setInputValue(data.text)
    setEditId(data.id)
  }

  const handleUpdate = () => {
    dispatch(editTask({
      id: editId,
      text: inputValue,
    }))
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
          {taskList?.tasks?.map((task :onetask) => (
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
