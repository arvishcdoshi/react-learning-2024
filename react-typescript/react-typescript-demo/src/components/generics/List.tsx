
type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
}

// We need to specify what `T` is. It can be done before the parenthesis. <T extends {}> It needs to extend
// a base type. T extends an empty object or in other words, the least restriction when passing in props.
export const List = <T extends {}>({items, onClick}: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div key = {index} onClick={() => onClick(item)}>
                        {JSON.stringify(item)}
                    </div>
                )
            })}
        </div>
    )
}