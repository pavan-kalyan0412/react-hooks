import React, {useReducer} from 'react'

const reducer = (state, action) =>{
    switch(action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset':
            return {count:0};
        default:
            return state
    }
}

function Counter () {
    const [state, dispatch] = useReducer(reducer, {count:0});

    return(
        <div>
            <p>Count:{state.count}</p>
            <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>

        </div>
    )
 }

 export default Counter;