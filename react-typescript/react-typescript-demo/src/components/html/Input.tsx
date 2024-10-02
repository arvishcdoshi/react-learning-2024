type InputProps = React.ComponentProps<'input'>


export const CustomInput = (props: InputProps) => {
    console.log({...props})
    return <input {...props}/>
}