import styled from "styled-components"

const StyledButtonContainer = styled.div`
display: flex;
gap: 0.9rem;
`
const SaveButton = styled.button`
font-weight: bold;
border-color: green;
color: white;
background-color: green;
`
const CancelButton = styled.button`
font-weight: bold;
border-color: red;
color: white;
background-color: red;
`

export const NavigationButtons=({onCancel})=>{
    return(
        <StyledButtonContainer>
            <SaveButton>Submit</SaveButton>
            <CancelButton onClick={onCancel}>Cancel</CancelButton>

        </StyledButtonContainer>
        
    )
}