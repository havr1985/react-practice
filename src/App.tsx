import './App.css';
import TodoComponents from './components/todo-components/TodoComponents.tsx';

function App() {
  return (
    <div className="container mx-auto my-4">
      <h1 className="text-center font-bold text-5xl text-amber-900 mb-4">Todos list</h1>
      <TodoComponents />
    </div>
  );
}

export default App;
