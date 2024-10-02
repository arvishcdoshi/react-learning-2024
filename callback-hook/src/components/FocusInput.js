import React, {useEffect, useRef} from 'react'

function FocusInput() {

  const inputRef = useRef(null)

  useEffect(() => {
    // `current` property - React will set the ref's current property to the corresponding DOM node 
    // call the focus method on the input element
    inputRef.current.focus()
  }, [])

  return (
    <div>
      {/* Attaching a ref to the input element. We've to use the reserved `ref` attribute.  */}
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default FocusInput