// import React, {useReducer} from 'react'

// const reducer = (state, action) =>{
//     switch(action.type) {
//         case 'increment':
//             return {count: state.count + 1};
//         case 'decrement':
//             return {count: state.count - 1};
//         case 'reset':
//             return {count:0};
//         default:
//             return state
//     }
// }

// function Counterthree () {
//     const [state, dispatch] = useReducer(reducer, {count:0});
//     const [state2, dispatchtwo] = useReducer(reducer, {count:0})

//     return(
//         <div>
//         <div>
//             <p>Count:{state.count}</p>
//             <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
//             <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
//             <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
//         </div>
//         <div>
//         <p>Count:{state2.count}</p>
//         <button onClick={()=>dispatchtwo({type:'increment'})}>Increment</button>
//         <button onClick={()=>dispatchtwo({type:'decrement'})}>decrement</button>
//         <button onClick={()=>dispatchtwo({type:'reset'})}>Reset</button>
//     </div>
//     </div>
//     )
//  }

//  export default Counterthree;


 import React, {useReducer} from 'react'

 const initialstate=0;
const reducer = (state, action) =>{
    switch(action.type) {
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return initialstate;
        default:
            return state
    }
}

function Counterthree () {
    const [count, dispatch] = useReducer(reducer, initialstate);
    const [counttwo, dispatchtwo] = useReducer(reducer, initialstate)

    return(
        <div>
        <div>
            <p>Count:{count}</p>
            <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
        <div>
        <p>Count:{counttwo}</p>
        <button onClick={()=>dispatchtwo({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatchtwo({type:'decrement'})}>decrement</button>
        <button onClick={()=>dispatchtwo({type:'reset'})}>Reset</button>
    </div>
    </div>
    )
 }

 export default Counterthree;