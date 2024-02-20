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
import ComponentFunctionClick from './components/event-handling/ComponentFunctionClick';
import ClassComponentClick from './components/event-handling/ClassComponentClick';
import ClassComponentEventBind from './components/event-handling/ClassComponentEventBind';
import ParentComponent from './components/methods-as-props/ParentComponent';
import UserGreeting from './components/conditional-rendering.js/UserGreeting';
import NameList from './components/list-rendering/NameList';
import NameListIndexAsKey from './components/list-rendering/NameListIndexAsKey';
import CSSStylesheets from './components/styling-react-component/CSSStylesheets';
import InlineStyling from './components/styling-react-component/InlineStyling';
import './components/styling-react-component/ccs-modules-example/appStyles.css';
import styles from './components/styling-react-component/ccs-modules-example/appStyles.module.css'

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>success</h1>
      <InlineStyling />
      
      {/*  */}
      {/* <InlineStyling />
      <CSSStylesheets primary={true}/> */}
      
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
      <CWelcomePropsDestructed abbreviation="Dipl. Ing." profession="Softeware Entwickler"/>
      
      <ComponentFunctionClick />
      <ClassComponentClick />

      <ClassComponentEventBind />

      <ParentComponent />

      <UserGreeting />

      <NameList />
      <NameListIndexAsKey />
      */}
    </div>
  );
}

export default App;
