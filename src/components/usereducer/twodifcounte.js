import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement1":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Countertwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>First Counter: {state.firstCounter}</div>
      <div>Second Counter: {state.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment1", value: 1 })}>
        Increment 1
      </button>
      <button onClick={() => dispatch({ type: "decrement1", value: 1 })}>
        Decrement 1
      </button>
      <button onClick={() => dispatch({ type: "increment1", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement1", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        Increment Counter 2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement Counter 2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Countertwo;
