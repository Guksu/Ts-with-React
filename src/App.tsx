import React, { FC, ChangeEvent, useState } from "react";
import { ITask } from "./interface";
import TodoList from "./components/TodoList";
//Fc 는  Functional Component타입이다.
const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      //input의 number타입의 value는 string타입이다.
      setDeadline(parseInt(e.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodo([...todo, newTask]);
    setTask("");
    setDeadline(0);
  };

  return (
    <>
      <header>
        <input
          type="text"
          placeholder="Task"
          name="task"
          value={task}
          onChange={handleChange}
        ></input>
        <input
          type="number"
          placeholder="Deadline"
          name="deadline"
          value={deadline}
          onChange={handleChange}
        ></input>
        <button onClick={addTask}>Add</button>
      </header>
      <div>
        {todo.map((item: ITask, key: number) => {
          return <TodoList key={key} task={item} />;
        })}
      </div>
    </>
  );
};

export default App;
