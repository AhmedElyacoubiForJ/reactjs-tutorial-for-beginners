import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import JSXGreet from './components/JSXGreet';
import GreetWithoutJSX from './components/GreetWithoutJSX';
import GreetWithProps from './components/GreetWithProps';
import WelcomeWithProps from './components/WelcomeWithProps';
import CMessage from './components/CMessage';

function App() {
  return (
    <div className="App">
      <CMessage />


      {/* <Greet />
      <Welcome />
      <JSXGreet />
      <GreetWithoutJSX />

      <GreetWithProps profession="Software developer" abbreviation="Dipl. Ing.">
        <p>This is children props</p>
      </GreetWithProps>

      <GreetWithProps profession="Software architect" abbreviation="Dr.">
        <button>Action</button>
      </GreetWithProps>

      <WelcomeWithProps profession="Software developer" abbreviation="Dipl. Ing."/>
      <WelcomeWithProps profession="Software architect" abbreviation="Dr."/> */}
    </div>
  );
}

export default App;
