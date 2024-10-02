import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
  const [count, setCount] = useState(0)

  const tick = () => {
    // Updating state based on previous state ==> https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
    setCount(prevCount => prevCount + 1)
  }

  useEffect( () => {
    console.log('called useEffect here')
    const interval = setInterval(tick, 1000)
    
    return () => {
        clearInterval(interval)
    }

  }, [])


  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter
