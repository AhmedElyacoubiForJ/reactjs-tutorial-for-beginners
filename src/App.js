import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import JSXGreet from './components/JSXGreet';
import GreetWithoutJSX from './components/GreetWithoutJSX';

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <JSXGreet />
      <GreetWithoutJSX />
    </div>
  );
}

export default App;
