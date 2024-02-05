import { useState } from "react";

function AddTodo(){
    <div>
        <input placeholder="Add a todo " value={text} onChange={handleChange} />
        <button onClick={handleAdd}>Add Todo</button>
    </div>
}

function Todo() {

    const [ text, setText ]= useState("")
    const [todos, setTodos] = useState([])

    const handleChange = (e) =>{
        setText(e.target.value)
    }

    const handleAdd = () =>{
        
        const newitem = {
            id: Date.now() + Math.random() + text,
            title:text,
            status:false
        }

        const todolistafterAddingitem = [...todos,newitem]


        setTodos(todolistafterAddingitem)
        setText("")
    }
    console.log(todos)

    return <div>
        <h1>sahil Todo app</h1>
        <div>
            {todos.map((todo)=>
            <div key= {todo.id}>{todo.title}-{todo.status ? "completed" : "not completed"}</div>
            )}
        </div>
    </div>
}

export default Todo;