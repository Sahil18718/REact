// src/App.js
import React, { useEffect, useState, useRef, useMemo } from 'react';
import useApi from './useApi';


const App = () => {
  // taking input
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  const apiUrl = useMemo(() => `https://jsonplaceholder.typicode.com/todos/${inputValue}`, [inputValue]);

  // taking props from other file and working on this page2
  const { data, loading, error } = useApi(apiUrl);

  useEffect(() => {
    // You can perform additional actions after data is fetched
    // For example, focus on an input field after data is loaded
    inputRef.current.focus();
  }, [data]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>React API App</h1>
      
      <input type="text" value={inputValue} onChange={handleInputChange} ref={inputRef} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
