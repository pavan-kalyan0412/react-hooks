import React,{useState, useEffect} from 'react'
import axios from 'axios'

function Datafetchbutton() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButton, setIdFromButton] = useState(1)


    const handleClick = () =>{
        setIdFromButton(id)
    }
    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(response => {
            console.log(response)
            setPost(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[idFromButton])
  return (
  <div>
<input type="number" value={id} onChange={e=> setId(e.target.value)} />
<button type="button" onClick={handleClick} >Fetch Data</button>
<div><h1>Data:</h1>{post.body}</div>
  </div>
  )
}

export default Datafetchbutton