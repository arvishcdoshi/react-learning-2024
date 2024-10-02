type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}


export const Input = (props: InputProps) => {
    
    // It doesn't matter if we pass the event as a prop or define it within the component.
    
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(event)
    // }

    // return <input type='text' value={props.value} onChange={handleInputChange} />

    return <input type='text' value={props.value} onChange={props.handleChange} />
}