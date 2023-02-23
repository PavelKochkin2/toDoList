import { useState } from 'react';
import './App.css';
import { ToDoList, Task } from './ToDoList';

function App() {

  let initTasks: Array<Task> = [
    {id:1, name:"learn react", isDone: false},
    {id:2, name:"learn .net", isDone: true},
    {id:3, name:"learn azure", isDone: false},
  ]



 let arr =  useState(initTasks);
 let tasks = arr[0];
 let setTasks = arr[1];

 
function removeTask(id: number){
  let filteredTasks = tasks.filter(task => task.id !== id);
  setTasks(filteredTasks);
}
  return (
    <ToDoList title='baby' tasks={tasks} removeTask={removeTask} />
  );
}


export default App;
