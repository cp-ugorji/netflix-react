import './App.css';
import Counter from './components/Counter';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      {/* react class component */}
      <Counter/>

      {/* react pure class component */}
      <Search />
    </div>
  );
}

export default App;
