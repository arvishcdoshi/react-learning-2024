import React, {useState} from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {

  const [display, setDisplay] = useState(true)  
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {/* If the display variable is set to True, we render the HookMouse component. */}
      {display && <HookMouse/>}
    </div>
  )
}

export default MouseContainer
