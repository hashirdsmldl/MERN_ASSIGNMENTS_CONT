import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyContext from './MyContext';



const AppWrapper = () => {
  const [message, setMessage] = useState('Hello from index.js!');

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  const contextValue = {
    message,
    updateMessage,
  };

  return (
    <MyContext.Provider value={contextValue}>
      <App />
    </MyContext.Provider>
  );
};

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
