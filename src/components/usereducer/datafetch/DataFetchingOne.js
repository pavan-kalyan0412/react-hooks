import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [loading, SetLoading] = useState(true)
    const [post, SetPost] = useState({})
    const [error, SetError] = useState('')

    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            SetLoading(false)
            SetError('')
            SetPost(response.data)
        })
        .catch(error =>{
            SetLoading(false)
            SetError('something went wrong')
            SetPost({})
        })
    }, []);

  return (
    <div>
        {loading ? 'Loading.......' : post.title}
        {error ? error: null}
    </div>
  )
}

export default DataFetchingOne