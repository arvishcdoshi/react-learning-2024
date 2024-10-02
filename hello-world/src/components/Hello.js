// Simple functional component

import React from 'react'

const Hello = () => {
    
    // CODE WITH JSX
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Arvish !!! </h1>
    //     </div>
    // )

    // CODE WITHOUT JSX
    return React.createElement('div', 
                                {id: 'hello', className: 'dummyClass'}, 
                                React.createElement('h1', null, 'Hello Arvisssh'))

}

export default Hello