// src/components/Counter.jsx
// This component teaches the most important React idea: "state".
//
// State = data that the component remembers and React re-renders
// the UI whenever it changes.
//
// useState returns a pair: [currentValue, functionToChangeIt]
// We never change state directly - we always use the setter function.

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        You clicked <strong>{count}</strong> times
      </p>
      <button onClick={() => setCount(count + 1)}>Increase +1</button>
      <button onClick={() => setCount(count - 1)}>Decrease -1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
