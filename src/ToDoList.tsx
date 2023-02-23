type Task = {
  id: number,
  name: string,
  isDone: boolean
}

export type PropsType = {
  title:string,
  tasks: Array<Task> 
}

export function ToDoList(props: PropsType) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}
