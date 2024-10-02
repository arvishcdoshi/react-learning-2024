//import logo from './logo.svg';
import './App.css';
import ClassCounterOne from './components/ClassCounterOne';
import ClassMouse from './components/ClassMouse';
import DataFetching from './components/DataFetching';
// import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import React, {useReducer} from 'react';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';

// Creating Contexts
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()


const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
  //const [count, dispatch] = useReducer(reducer, initialState)
  return (
      <div className="App">
        {/* <ClassCounter /> */}
        {/* <HookCounter /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounterThree /> */}
        {/* <HookCounterFour /> */}
        {/* <ClassCounterOne /> */}
        {/* <HookCounterOne /> */}
        {/* <ClassMouse /> */}
        {/* <HookMouse /> */}
        {/* <MouseContainer /> */}
        
        {/* <IntervalClassCounter /> */}
        {/* <IntervalHookCounter /> */}

        {/* <DataFetching /> */}
        {/* <UserContext.Provider value={'Arvish'}>
          <ChannelContext.Provider value={'Codal'}>
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider> */}

        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        {/* <CounterThree /> */}

        {/* CHANGES FOR VIDEO-65 */}
        {/* Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC /> */}
        
        {/* Video-66 */}
        {/* <DataFetchingOne /> */}

        {/* Video-67 */}
        <DataFetchingTwo />
      </div>
  );
}

export default App;
