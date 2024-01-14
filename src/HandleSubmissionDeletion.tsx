import styled from "styled-components"
export const HandleSubmissionDeletion=()=>{
    const Text = styled.h3`
    font-weight: 400;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    `
    const Card = styled.div`
    position: relative;
    margin-top:3rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    padding: 0.9rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    `
    const InfoText = styled.p`
    font-weight: 400;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    `
    const DeleteButton = styled.button`
    cursor:pointer;
    background-color: black;
    color:white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 12px;
    font-weight: bold;
}
    `
    const DeleteByName = styled.input`
    padding: 0 !important;
    `
    const deleteInfo ="Delete a submission"
    const infoText ="Delete a submission using its name"
    const deleteInfoInputName = 'deleteInfoInputName'
    const deleteButtonContent ='Delete submission'

    return(
        <Card>
        <Text>{deleteInfo}</Text>
        <DeleteByName className={deleteInfoInputName}></DeleteByName>
        <InfoText>{infoText}</InfoText>
        <DeleteButton>{deleteButtonContent}</DeleteButton>
        </Card>
    )
}