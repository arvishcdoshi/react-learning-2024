import React from 'react'

// function FRInput() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   )
// }

// Re-write the functional component using arrow functions.

const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
}, ) 

export default FRInput
