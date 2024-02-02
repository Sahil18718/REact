import { useState } from "react";



function Todo() {

    const [ text, setText ]= useState("")

    const handleChange = (e) =>{
        setText(e.target.value)
    }

    const handleAdd = () =>{
        console.log("Button Clicked")
    }

    return <div>
        <h1>sahil Todo app</h1>
        <div>
            <input placeholder="Add a todo " value={text} onChange={handleChange} />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    </div>
}

export default Todo;