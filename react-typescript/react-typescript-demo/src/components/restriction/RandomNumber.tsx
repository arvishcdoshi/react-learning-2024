type RandomNumberType = {
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
// The `&` operator above means `PositiveNumber` will contain all types of `RandomNumberType` in addition 
// to `isPositive`.

// Line 7 & 8 are basically telling we can never set `isNegative` & `isZero` as a prop when you set `isPositive`



type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

type Zero = RandomNumberType & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}



type RandomNumberProps = PositiveNumber | NegativeNumber | Zero


export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero,
}: RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'} {' '}
            {isZero && 'zero'}
        </div>
    )
}