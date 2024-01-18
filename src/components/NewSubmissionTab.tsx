import styled from "styled-components"
import NewInputTodo from "./NewInputTodo"
import { useState } from "react"
import { TextField } from "@shopify/polaris"

export const NewSubmissionTab=()=>{
    const HandleSubmissionsText = "Handle Submissions here"
    const Card = styled.div`
    position: relative;
    margin-top:4rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    padding: 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    `
    const Text = styled.h1`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    text-align: center;
    `
    const InputInfo = styled.span`
    font-weight: 350;
    font-size: 12px;
    text-align: left;
    
    `
    const TextfieldContainer = styled.div`
    `

    const SubmitButton = styled.button`
    cursor:pointer;
    background-color: black;
    color:white;
    margin-left: 0.2rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 10px;
    font-weight: bold;
    `

    const [description, setDescription] =useState('')
    const [todos, setTodos] = useState([])

    
    const handleInputChange = (e) => {
        setDescription(e.target.value);
      };

    const submitForm= async(e)=>{
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch("http://localhost:5000/todos",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(body)
        });

        const newTodo = await response.json();
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setDescription('')
        console.log(response)
    }
         catch (error) {
            console.error(error.message)
        }
    }


    return(
        <div>
                <Text>{HandleSubmissionsText}</Text>
            <Card>
            <table>
                <thead>
                    <tr>
                        <th>
            </th>
            </tr>
            </thead>
                <tr>
                <td>
                    <TextfieldContainer>
                    <TextField 
                    label='Add a new submission'
                    autoComplete=""
                    helpText={<InputInfo>Press add when done</InputInfo>}
                    value={description}
                    onChange={handleInputChange}
                     ></TextField>
                    </TextfieldContainer>
                    </td>
                    <td>
                    <SubmitButton onClick={submitForm}>Add</SubmitButton>
                    </td>

                </tr>
                </table>
            </Card>

        </div>
    )
}