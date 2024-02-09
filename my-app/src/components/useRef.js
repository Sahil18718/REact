import { useRef } from "react";
import { useState } from "react";


function TodoRef()  {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [isValid, setValid] = useState(true);
  const [todos,setTodos] = useState([])
  
  const validateForm = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;



    return username.trim() !== '' && password.trim() !== '';
  };

  const handleAdd = (text) =>{
    const newitem = {
      title:usernameRef,
      password:passwordRef
    }

    const addingtodoitem = {...todos, newitem}
    setTodos(addingtodoitem)
    console.log(addingtodoitem)
  }

  // const handleAdd = (text) =>{
  //   handleAdd(text)
  //   setText("")
  // }
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
  const isFormValid = validateForm();

  if (!isFormValid) {
      setValid(false);
      return;
  }
  setValid(true);
  };

  return (
    <div>
      <h1>React Form with useRef</h1>
      <form onSubmit={handleSubmit}>
      <button onClick={handleAdd}>add data</button>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" ref={usernameRef} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        {!isValid && <p style={{ color: 'red' }}>Please fill out all fields.</p>}
        <button type="submit">Submit</button>
      </form>
      <p>

      </p>
    </div>
  );
};

export default TodoRef;
