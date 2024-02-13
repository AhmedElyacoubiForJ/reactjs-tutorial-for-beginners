import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import JSXGreet from './components/JSXGreet';

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <JSXGreet />
    </div>
  );
}

export default App;
