import { useRef, useEffect } from "react";

export const DomRef = () => {
    // Invoking the useRef hook
    // For DOM references, specify the DOM element type.
    const inputRef = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}