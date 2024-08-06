import React,{useEffect, useReducer} from 'react'
import axios from 'axios'

const initialstate = {
    loading:true,
    post: [],
    error:''
}

const reducer = (state, action) =>{
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return{
                loading:false,
                post:action.payload,
                error:' '
            }
        case 'FETCH_ERROR':
            return {
                loading:false,
                error:'something went wrong',
                post:{ }
            }
            default:
            return state;
    }
}



function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialstate);

    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
        dispatch({type: 'FETCH_SUCCESS', payload:response.data})
        })
        .catch(error =>{
            dispatch({type:'FETCH_ERROR'})
        })
    },[]);
  return (
    <div>
        {state.loading?'LOADING.....':(
            <>
            <h2>Title: {state.post.title}</h2>
            <p>Body: {state.post.body}</p>
            </>
        )}
        {state.error? state.error: null}
        </div>
  )
}

export default DataFetchingTwo


