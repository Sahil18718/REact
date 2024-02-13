import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { useMemo } from "react";
import Counter from "./counter";
import TodoRef from "./useRef";


function Todo() {
    
    const [todos, setTodos] = useState([])

    const handleAdd = (text) =>{
        
        const newitem = {
            id: Date.now() + Math.random() + text,
            title:text,
            status:false,
        }

        const todolistafterAddingitem = [...todos,newitem]


        setTodos(todolistafterAddingitem)

    }

    const handleDelete = (id) =>{
        const deleteTodo = todos.filter((todo) => todo.id !== id);
        setTodos(deleteTodo)
       

    }

    const handleToggle = (id) =>{
        const updatedTodos = todos.map((todo) => todo.id === id ? { ...todo, status: !todo.status } : todo
        );
        setTodos(updatedTodos);
      
    }

    const memoizedTodos = useMemo(() => todos, [todos]);

    // Memoize the functions passed as props to TodoItem
    const memoizedHandleDelete = useMemo(() => handleDelete, []);
    const memoizedHandleToggle = useMemo(() => handleToggle, []);


    // console.log( memoizedTodos)

    return (
    <div>
        
        <TodoRef/>
        <h1>sahil Todo app</h1>
        <Counter/>
        
        <AddTodo handleAdd={handleAdd}/>
        <div>
            {todos.map((todo)=>(
            <TodoItem 
            id={todo.id}
            key={todo.id}
            title={todo.title}
            status={todo.status}
            handleDelete={memoizedHandleDelete}
            handleToggle = {memoizedHandleToggle}
            />
            ))}
        </div>
    </div>
    )
}




export default Todo ;


