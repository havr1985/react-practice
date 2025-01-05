import './App.css';
import FamilyComponent from './components/FamilyComponent.tsx';
import { simpsons } from './data/data.ts';

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="my-4 text-amber-700 text-4xl text-center">Simpson family</h1>
      <FamilyComponent characters={simpsons} />
    </div>
  );
}

export default App;
