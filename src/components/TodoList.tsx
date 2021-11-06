import React from "react";
import { ITask } from "../interface";

interface Props {
  task?: ITask;
}

const TodoList = ({ task }: Props) => {
  return (
    <ul>
      <li>{task?.taskName}</li>
    </ul>
  );
};

export default TodoList;
