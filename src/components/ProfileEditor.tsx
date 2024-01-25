import styled from "styled-components"
import { PersonCircleIcon } from "../Icons/PersonCircleIcon"
import { CondensedInput } from "./CondensedInput"
import { NavigationButtons } from "./NavigationButtons"

const Card = styled.div`
position: relative;
margin-top: 19rem;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
padding: 0.9rem;
width: 420px;
box-shadow: 0 2px 9px rgba(0, 0, 0, 0.2);
`
const TitleText = styled.h1`
margin-left: 0.5rem;
text-align: center;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 19px;
`

const IconContainer = styled.div`
width: 90px;
margin-left: 10rem;
`

const ProfileElementGrid = styled.div`
justify-content: space-between;
display: flex;
gap: 10px;
flex-direction: column;
margin-bottom: 2rem;
`

const SubText = styled.p`
text-align: center;
`


const title = "Profile Editor"
const currentLoginUser = "Currently logged in as: "

export const ProfileEditor=({ onCancel, currentUser })=>{
    return(
        <div>
            <Card>
                <TitleText>{title}</TitleText>
                <IconContainer><PersonCircleIcon></PersonCircleIcon></IconContainer>
                <SubText>{currentLoginUser}{currentUser}</SubText>
                <ProfileElementGrid>
                    <CondensedInput mainText="Username" subText=""></CondensedInput>
                    <CondensedInput mainText="Email" subText=""></CondensedInput>
                </ProfileElementGrid>
                <NavigationButtons onCancel={()=>onCancel()}></NavigationButtons>

            </Card>
            
        </div>
    )
}