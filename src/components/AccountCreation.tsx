import styled from "styled-components"

const Card = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
max-width: 400px;
padding: 2rem;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
`
const TitleText = styled.h1`
margin-left: 0.5rem;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 12px;
`

const SubText = styled.p`
font-weight: 200;
`

const title = "Profile Editor"

export const AccountCreation=()=>{
    return(
        <div>
            <Card>
                <TitleText>{title}</TitleText>


            </Card>
            
        </div>
    )
}