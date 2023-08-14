import React from "react";
import "./Style.css";

const PureCounter = React.memo(({ count, onIncrement, onDecrement }) => {
  console.log("PureCounter rendered"); // This will only be called when props change
  return (
    
      <div className="counter">
        <div className="button">
          <button onClick={onIncrement}>Increment</button>
        </div>
        <div className="p">
          <p>Count: {count}</p>
        </div>
        <div className="button">
          <button onClick={onDecrement}>Decrement</button>
        </div>
      </div>
    
  );
});

export default PureCounter;
