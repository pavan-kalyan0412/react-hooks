import React, {useReducer} from 'react';

const reducer = (state, action) =>{
    switch(action.type) {
        case 'increment':
            return {count: state.count + action.value};
        case 'decrement' :
            return {count: state.count - action.value};
        case 'reset':
            return {count:0};
        default:
            return state;
    }
}

function Counter1 () {

    const [state, dispatch] = useReducer(reducer, {count:0, SecCounter:15})

    return (
        <div style={{ textAlign: 'center' }}>
            <p>Count:{state.count}</p>
            <hr />
            <button onClick={()=>dispatch({type: 'increment', value:1})}>Increment 1</button>
            <button onClick={()=>dispatch({type: 'decrement', value:-1})}>Decrement 1</button>
            <button onClick={()=>dispatch({type: 'increment', value:5})}>Increment 5</button>
            <button onClick={()=>dispatch({type: 'increment', value:-5})}>Decrement 5</button>
            <button onClick={()=>dispatch({type: 'increment', value:10})}>Increment 10</button>
            <button onClick={()=>dispatch({type: 'reset', value:1})}>Reset</button>

        </div>
    )
}

export default Counter1 ;