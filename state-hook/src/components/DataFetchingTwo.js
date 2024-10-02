import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

// Declare the initial state & define the reducer function.
// For initial state, we use the same variables as used in DataFetchingOne.js,
// but this time we declare them as properties of a single object.

const initialState = {
    loading: true,
    error: '',
    post: {}

}

// Reducer function accepts state & action as its arguments & returns the updated state.
// Here, we're gonna be managing two state transition scenarios. One when the data was
// fetched successfully and other when there was an error fetching the data.

// These two scenarios form the switch cases for our reducer function.
const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong!'
            }
        
        default:
            return state
    }
}

function DataFetchingTwo() {
  // Invoking the useReducer & useEffect to fetch the data & set the state.
  const [state, dispatch] = useReducer(reducer, initialState) 
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        dispatch({type: 'FETCH_SUCCESS', payload: response.data})
    })
    .catch(error => {
        dispatch({type: 'FETCH_ERROR'})
    })
  }, [])

  return (
    <div>
      {state.loading ? 'Loading...': state.post.title}
      {state.error ? state.error: null}
    </div>
  )
}

export default DataFetchingTwo
