type ButtonProps = {
    variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>


export const CustomButton = ({variant, children, ...rest }: ButtonProps) => {
    console.log(variant)
    console.log(children)
    console.log({...rest})
    return <button className={`class-with-${variant}`}{...rest}>{children}</button>
}
