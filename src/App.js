import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import JSXGreet from './components/JSXGreet';
import GreetWithoutJSX from './components/GreetWithoutJSX';
import GreetWithProps from './components/GreetWithProps';
import WelcomeWithProps from './components/WelcomeWithProps';
import CMessage from './components/CMessage';
import CCounter from './components/set-state-example/CCounter';
import CCounterFiveTime from './components/set-state-example/CCounterFiveTime';
import GreetPropsDestructed from './components/destructing-props-and-state/GreetPropsDestructed';
import CWelcomePropsDestructed from './components/destructing-props-and-state/CWelcomePropsDestructed';

function App() {
  return (
    <div className="App">
      <CWelcomePropsDestructed abbreviation="Dipl. Ing." profession="Softeware Entwickler"/>

      {/*
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

      <WelcomeWithProps profession="Software developer" abbreviation="Dipl. Ing."/>
      <WelcomeWithProps profession="Software architect" abbreviation="Dr."/> 
      
      <CMessage />
      
      <CCounter />
      <CCounterFiveTime />

      <GreetPropsDestructed name="Name" heroName="hero name" />
      */}
    </div>
  );
}

export default App;
