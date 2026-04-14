import { useState, useReducer } from "react";

const initialState = { count: 0 };
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
  //action.type === 'decrement'
  //action.type === 'increment'
  /// ici il se passera des choses
}
function DemoReducer() {
  const [state, setState] = useState(initialState);
  const [state2, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h1>useState</h1>
        <p>total : {state.count}</p>
        <button
          onClick={() =>
            setState((state) => ({ ...state, count: state.count - 1 }))
          }
        >
          -
        </button>
        <button
          onClick={() =>
            setState((state) => ({ ...state, count: state.count + 1 }))
          }
        >
          +
        </button>
      </div>
      <div>
        <h1>useReducer</h1>
        <p>total : {state2.count}</p>
        <button
          onClick={() => {
            dispatch({ type: DECREMENT, info: "toto" });
          }}
        >
          -
        </button>
        <button onClick={() => dispatch({ type: INCREMENT, info: "tata" })}>
          +
        </button>
      </div>
    </div>
  );
}

export default DemoReducer;
