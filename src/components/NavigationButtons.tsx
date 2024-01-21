import styled from "styled-components"

const StyledButtonContainer = styled.div`
display: flex;
gap: 0.9rem;
`
const SaveButton = styled.button`
font-weight: bold;
border-color: green;
color: green;
background-color: white;
`
const CancelButton = styled.button`
font-weight: bold;
border-color: red;
color: red;
background-color: white;
`

export const NavigationButtons=({onCancel})=>{
    return(
        <StyledButtonContainer>
            <SaveButton>Submit Changes</SaveButton>
            <CancelButton onClick={onCancel}>Cancel</CancelButton>

        </StyledButtonContainer>
        
    )
}