export type Task = {
  id: number,
  name: string,
  isDone: boolean
}

export type PropsType = {
  title:string,
  tasks: Array<Task> 
  removeTask: Function;
}

export function ToDoList(props: PropsType) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.tasks.map(t=>{
        return (
          <ul>
            <li>name: {t.name}</li>
            <input type='checkbox' checked={t.isDone}/>
            <input type='button' value='x' onClick={()=> {
              props.removeTask(t.id)
            }}/>
          </ul>
        )
      })}
    </div>
  );
}
