import { useState } from "react";

export const EditTodo=(props)=>{
    const {todo} = props;

    const [description, setDescription] = useState(todo.description);

    const updateDescription = async(e)=>{
        e.preventDefault()
        try {
            const body = { description };
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
        } catch (error) {
            console.error(error.message)
            
        }
    }
    
    return(
        <div id={`id${todo.todo_id}`}>
            <input 
            type='text' 
            value={description}
            onChange={e=> setDescription(e.target.value)}
            ></input>
            <button onClick={e => updateDescription(e)}>Update</button>
</div>
    )
}