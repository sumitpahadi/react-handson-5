import React from 'react';
import "./App.css"
import CounterWithLogic from './Component/CounterWithLogic';

const App = () => {
  return (
    <div className='body'>
      <div className="header">

      <h1>Counter App</h1>
      </div>
      <hr />
      <CounterWithLogic />
    </div>
  );
};

export default App;
