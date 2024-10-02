
import { Name } from "./Person.types"

type PersonsListProps = {
    names: Name[]
}

export const PersonList = (props: PersonsListProps) => {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <h2>{name.first} {name.last}</h2>
                )
            })}
        </div>
    )
}