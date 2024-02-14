import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import JSXGreet from './components/JSXGreet';
import GreetWithoutJSX from './components/GreetWithoutJSX';
import GreetWithProps from './components/GreetWithProps';

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <JSXGreet />
      <GreetWithoutJSX />

      <GreetWithProps profession="Software developer" abbreviation="Dipl. Ing.">
        <p>This is children props</p>
      </GreetWithProps>

      <GreetWithProps profession="Software architect" abbreviation="Dr.">
        <button>Action</button>
      </GreetWithProps>
    </div>
  );
}

export default App;
