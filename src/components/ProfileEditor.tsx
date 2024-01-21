import styled from "styled-components"
import { PersonCircleIcon } from "../Icons/PersonCircleIcon"
import { CondensedInput } from "./CondensedInput"

const Card = styled.div`
position: relative;
margin-top: 7rem;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
padding: 0.5rem;
width: 420px;
box-shadow: 0 2px 9px rgba(0, 0, 0, 0.2);
}
`
const TitleText = styled.h1`
margin-left: 0.5rem;
text-align: center;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 19px;
`

const SubText = styled.p`
font-weight: 200;
`

const IconContainer = styled.div`
position: relative;
width: 90px;
`

const ProfileElementGrid = styled.div`
justify-content: space-between;
display: flex;
gap: 10px;
flex-direction: row;
`

const StyledInput = styled.input`
height: 20px;
`


const title = "Profile Editor"

export const ProfileEditor=()=>{
    return(
        <div>
            <Card>
                <TitleText>{title}</TitleText>
                <ProfileElementGrid>
                    <CondensedInput mainText="Username" subText=""></CondensedInput>
                    <CondensedInput mainText="Email" subText=""></CondensedInput>
                <IconContainer><PersonCircleIcon></PersonCircleIcon></IconContainer>
                </ProfileElementGrid>


            </Card>
            
        </div>
    )
}