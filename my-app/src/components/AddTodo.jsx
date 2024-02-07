import { useState } from "react"

function AddTodo({handleAdd}){
    const [ text, setText ]= useState("")

    const handleChange = (e) =>{
        setText(e.target.value)
    }

    const handleClick = () =>{
        handleAdd(text)
        setText("")
    }


    return(
    <div>
        <input placeholder="Add a todo " 
        value={text}
         onChange={handleChange} />
        <button onClick={handleClick}>Add Todo</button>
    </div>

    )
}

export default AddTodo
