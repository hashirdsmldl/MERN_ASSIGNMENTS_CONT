import React, { useContext, useRef } from 'react';
import MyContext from './MyContext';

function MathOperation({ title }) {
  const { message, updateMessage } = useContext(MyContext);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  const handleResult = () => {
    const num1 = Number(inputRef1.current.value);
    const num2 = Number(inputRef2.current.value);
    let result = 0;

    if (title === 'sum') {
      result = num1 + num2;
      updateMessage({ ...message, sum: result });
    } else if (title === 'divide') {
      result = num1 / num2;
      updateMessage({ ...message, divide: result });
    } else if (title === 'minus') {
      result = num1 - num2;
      updateMessage({ ...message, minus: result });
    }
  };

  return (
    <div>
      <input ref={inputRef1} type="number" />
      <input ref={inputRef2} type="number" />
      <button onClick={handleResult}>{title}</button>
    </div>
  );
}

export default MathOperation;
