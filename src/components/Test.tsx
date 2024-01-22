import styled from "styled-components"
import { NewListSubmissions } from "./NewListSubmissions"
import { CategoryIcon } from "../Icons/CategoryIcon"

const IconContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 2rem;
`
const ListContainer = styled.div`
margin-top:1rem;
`
const Text = styled.h1`
padding: 1rem;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 20px;
text-align: center;
`
const TableItem = styled.td`
height: 0px;
padding: 0 !important;
`

const introText = "Handle All Submissions Here"

export const Test=()=>{
    return(
        <ListContainer>
            <IconContainer>
            <tr>
                <td>
                <Text>{introText}</Text>
                </td>
                <TableItem><CategoryIcon></CategoryIcon>
                </TableItem>
                </tr>
                </IconContainer>
        <NewListSubmissions></NewListSubmissions>
        </ListContainer>
    )
}