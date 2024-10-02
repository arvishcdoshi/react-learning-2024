import logo from './logo.svg';
import './App.css';
import React from 'react'
import ParentComponent from './components/ParentComponent';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';

function App() {
  return (
    <div className="App">
      {/* useCallback example */}
      {/* <ParentComponent /> */}

      {/* useMemo Example */}
      {/* <Counter /> */}

      {/* useRef Example - 1 */}
      {/* <FocusInput /> */}

      {/* <ClassTimer /> */}
      <HookTimer />

    </div>
  );
}

export default App;
