// import {react} from 'react'

function TodoItem(props) {
    const { title , status, handleDelete, handleToggle} = props
    return(
        <div>
            <p>
            {title}-{status ? "completed" : "not completed"}
            </p>
            <button onClick={handleToggle}>Toggle</button>
            <button onClick={handleDelete}>Delete </button>
            

        </div>
        
    )
}

export default TodoItem;
