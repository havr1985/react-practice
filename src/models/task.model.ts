export interface IData {
  limit: number;
  skip: number;
  total: number;
  todos: ITodo[];
}

export interface ITodo {
  userId: number;
  id: number;
  todo: string;
  completed: boolean;
}
