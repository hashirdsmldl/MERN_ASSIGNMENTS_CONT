import React from 'react';
import { useContext } from 'react';
import MathOperation from './MathOperation';
import MyContext from './MyContext';

function App() {
  const { message } = useContext(MyContext);

  return (
    <div className="App">
      <p>The result of sum is {message.sum}</p>
      <p>The result of divide is {message.divide}</p>
      <p>The result of minus is {message.minus}</p>

      <MathOperation title="sum" />
      <MathOperation title="divide" />
      <MathOperation title="minus" />
    </div>
  );
}

export default App;
