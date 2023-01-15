import React , { FC , ChangeEvent, useState } from 'react';
import './App.css';

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodoList] = useState([]);

   const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.value === "task"){
      setTask(event.target.value)
    }else {
      setDeadline(Number(event.target.value))
    }
   };

  return (
    <div className="App">
     <div className="header">
       <div className="inputContainer"> 
          <input type="text" 
                   placeholder="Task..." 
                   name="task"
                   onChange={handleChange} />
          <input type="number" 
                    placeholder="Deadline (in Days)... "
                    name="deadline"
                    onChange={handleChange}  />
       </div>  
      <button>Add Task</button>
     </div>
     <div className="todoList"></div>
      </div>
  );
}

export default App;
