import { useState, useRef, useEffect } from "react";

export const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    const interValRef = useRef<number | null>(null)

    const stopTimer = () => {
        if (interValRef.current) {
            window.clearInterval(interValRef.current)
        }
    }

    useEffect(() => {
        
        // We are mutating the reference value here.
        // JFI - setInterval returns a numeric value which is the `id` of that interval.
        interValRef.current = window.setInterval(() => {
          setTimer((timer) => timer + 1)  
        }, 1000)

        // To make sure the timer is cleared when the component unmounts, we call the stopTimer function.
        return () => {
            stopTimer()
        }
    }, [])

    return (
        <div>
            HookTimer - {timer} - 
            <button onClick={() => stopTimer()}>Stop Timer</button>
        </div>
    )
}