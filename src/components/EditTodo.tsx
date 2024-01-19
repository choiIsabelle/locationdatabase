import { useState } from "react";
import styled from "styled-components";

export const EditTodo=(props)=>{

    const EditButton = styled.button`
    cursor:pointer;
    background-color: black;
    color:white;
    margin-left: 0.2rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 10px;
    font-weight: bold;
    `
    const StyledInput = styled.input`
    padding: 0.1rem;
    `
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
            <StyledInput 
            type='text' 
            value={description}
            onChange={e=> setDescription(e.target.value)}
            ></StyledInput>
            <EditButton onClick={e => updateDescription(e)}>Update</EditButton>
</div>
    )
}