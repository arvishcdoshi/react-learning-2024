import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne() {
  // Declaring three state variables 
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        setLoading(false)
        setPost(response.data)
        // In case of successful promise, we set the error message to empty to clear any previous message
        // if at all they're being displayed.
        setError('')
    })
    .catch(error => {
        setLoading(false)
        // We set the post object to an empty object to hide any existing post that might be displayed in 
        // the browser.
        setPost({})
        setError('Something went wrong!')
    })
  }, [])

  return (
    <div>
      {/* If component is busy loading the data, display the string loading */}
      {loading ? 'Loading...': post.title}
      {/* If there's an error, we need to display that as well */}
      {error ? error: null}
    </div>
  )
}

export default DataFetchingOne
