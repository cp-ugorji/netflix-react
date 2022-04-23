import './App.css';
import Counter from './components/Counter';
import Search from './components/Search';
import Toggle from './components/Toggle';

function App() {
  return (
    <div className="App">
      {/* react class component */}
      <Counter/>

      {/* react pure class component */}
      <Search />

      {/* react functional class component */}
      <Toggle title= "Hello React" />
    </div>
  );
}

export default App;
