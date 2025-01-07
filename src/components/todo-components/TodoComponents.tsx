import { FC, useEffect, useState } from 'react';
import { ITodo } from '../../models/task.model.ts';
import { getTodos } from '../../services/api.service.ts';
import TodoComponent from '../todo-component/TodoComponent.tsx';

const TodoComponents: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodos();
      setTodos(data.todos);
    };
    fetchData();
  }, []);
  return (
    <>
      <ul className="flex flex-wrap gap-3 justify-center">
        {todos.map((todo) => (
          <li key={todo.id} className="p-1 border border-amber-500 w-64">
            <TodoComponent todo={todo} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoComponents;
