import styled from "styled-components"

const Input = styled.input`
`
const InputTitle = styled.text`

`
const InputSubtext = styled.p`

`
const CondensedInputContainer = styled.div`
display: flex;
flex-direction: column;
`

export const CondensedInput=(props)=>{
    const { mainText, subText } = props;
    return(
        <CondensedInputContainer>
            <InputTitle>{mainText}</InputTitle>
            <Input></Input>
            <InputTitle>{subText}</InputTitle>
        </CondensedInputContainer>

    )
}