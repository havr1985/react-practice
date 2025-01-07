import { FC } from 'react';
import { ITodo } from '../../models/task.model.ts';

type TodoPropsType = {
  todo: ITodo;
};

const TodoComponent: FC<TodoPropsType> = ({ todo }) => {
  return (
    <div>
      <p>Todo Id: {todo.id}</p>
      <p>User Id: {todo.userId}</p>
      <p>Title: {todo.todo}</p>
      <p>Status: {todo.completed ? 'completed' : 'active'}</p>
    </div>
  );
};

export default TodoComponent;
