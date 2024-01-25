import styled from "styled-components"
import { useState } from "react"
import { FolderIcon } from "../Icons/FolderIcon"

export const NewSubmissionTab=()=>{
    const HandleSubmissionsText = "Add a New Submission Here"
    const Card = styled.div`
    margin-bottom:4rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
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
    margin-top: 4rem;
    text-align: center;
    `
    const InputInfo = styled.span`
    font-size: 14px;
    text-align: left;
    `
    const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
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

    const [description, setDescription] = useState('');

    const handleInputChange = (e) => {
        if (e.target && e.target.value) {
            e.preventDefault()
          setDescription(e.target.value);
        } else {
          console.error('Invalid event or value:', e);
        }
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

        setDescription('')
        console.log(response)
    }
         catch (error) {
            console.error(error.message)
        }
    }


    return(
         <div>
            <IconContainer>
            <tr>
                <td>
                <Text>{HandleSubmissionsText}</Text>
                </td>
                <td><FolderIcon></FolderIcon>
                </td>
                </tr>
                </IconContainer>
            <Card>
            <table>
                <thead>
                    <tr>
                        <th>
                        <InputInfo>Add a new Submission</InputInfo>
            </th>
            </tr>
            </thead>
                <tr>
                <td>
                    <input 
                    value={description}
                    autoFocus
                    onChange={(e) => {
                        console.log('Event:', e);
                        handleInputChange(e);
                      }}
                     ></input>
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