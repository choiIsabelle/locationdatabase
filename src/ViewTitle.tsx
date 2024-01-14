import styled from "styled-components"

export const ViewTitle=()=>{
    const title = 'View all current submissions'
    const Title = styled.h3`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    top: 50%;
    left: 50%;
    margin-left: 31rem;
    `
    return(
        <Title>{title}</Title>
    )
}