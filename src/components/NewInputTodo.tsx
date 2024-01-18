import { useCallback, useState } from 'react';
import styled from 'styled-components';

const NewInputTodo=()=>{
    const Title = styled.h1`
    `
    const BtnSuccess = styled.button`
    `
    const Input = styled.input`
    `
    const [description, setDescription]=useState('')
    const [todos, setTodos] = useState([])

    const handleInputChange = (e) => {
      setDescription(e.target.value);
    };

    const onSubmitForm= async(e)=>{
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
      <form onSubmit={onSubmitForm}>
      <Title>Input todo</Title>
      <Input 
          type ='text' 
          value={description} 
          onChange={handleInputChange}></Input>
      <BtnSuccess type='submit'>Add</BtnSuccess>
      </form>
      </div>
  )
}

export default NewInputTodo;