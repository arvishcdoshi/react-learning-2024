import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';

import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

import PortalDemo from './components/PortalDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

class App extends Component {
  render() {
    return (
      <div className="App">

        <UserProvider value="Arvish">
          <ComponentC />       
        </UserProvider>

        {/* <CounterTwo 
          render = { (count, incrementCount) => (
           <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />

        <CounterTwo 
          render = { (count, incrementCount) => (
           <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        /> */}
    
        {/* <ClickCounterTwo />
        <HoverCounterTwo />
        <User render={ (isLoggedIn) => isLoggedIn ? 'Arvish' : 'Guest' } />  */}
        
        {/* <ClickCounter name = 'Arvish'/> */}
        {/* <HoverCounter /> */}
        
        {/* <ErrorBoundary>
        <Hero heroName="Batman" />
        </ErrorBoundary>

        <ErrorBoundary>
        <Hero heroName="Superman" />
        </ErrorBoundary>

        <ErrorBoundary>
        <Hero heroName="Joker" />
        </ErrorBoundary> */}


        { /* <PortalDemo /> */} {/* Here, if we click inspect element, we'll see that element falls under the root element. */}

        {/* <FRParentInput /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        
        {/* <Table/> */}
        {/* <FragmentDemo /> */}
        {/* <LifecycleA /> */}
        {/* <Form/> */}
        {/* <h1 className='error'>Error</h1> */}
        {/* <h1 className={styles.success}>Success</h1> */}
        {/* <Inline /> */}
        {/* <Stylesheet primary={true} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind/> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet> */ }
        {/* <Greet name="Diana" heroName="Wonder Woman"/> */}
        
        {/* <Welcome name="Bruce" heroName="Batman" /> */}
        {/* <Welcome name="Clark" heroName="Superman" /> */}
        {/* <Welcome name="Diana" heroName="Wonder Woman" /> */}
        
        {/* <Hello/> */}
      </div>
    );
  }
}

export default App;
