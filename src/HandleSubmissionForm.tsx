import { FormLayout, TextField } from "@shopify/polaris"
import handleSubmissionCard from './HandleSubmission.module.css'
import handleSubmissionSearchButton from './HandleSubmission.module.css'
import styled from "styled-components"
import { useEffect, useState } from "react"
import { Spinner } from "@shopify/polaris"

export const HandleSubmissionForm=()=>{
    const HelperText = styled.span`
    font-size: 14px;
    font-weight: lighter;
    `
    const helpText="If the submission exists, search for it by name"
    const searchButtonText="Search"

    const [currentText, setCurrentText]=useState('');
    const [buttonClicked, setButtonclicked]=useState(false);

    const handleTextChange=( newText: string)=>{
        setCurrentText(newText)
    }
    const handleButtonClick=()=>{
        setButtonclicked(buttonClicked? false: true);
    }
    // Spinner effect is rendered when the button is clicked
    // The spinner effect is removed once the user begins to type, or if the submit button is re-clicked
    // TODO add  search button functionality
    useEffect(()=>{
        const timeoutId = setTimeout(() => {
            setButtonclicked(false);
        }, 500);
        return () => clearTimeout(timeoutId);

    }, [currentText])

    return(
            <div className={handleSubmissionCard.handleSubmissionCard}>           
        <FormLayout>
            <TextField
                    autoComplete="off"
                    onChange={handleTextChange}
                    value={currentText}

            label="Search for a submission"
            helpText={
                <HelperText>{helpText}</HelperText>
                
            }/>
               {buttonClicked && <div style={{width:'13px'}}><Spinner size="small" /></div>}
            <button onClick={handleButtonClick} className={handleSubmissionSearchButton.handleSubmissionSearchButton}>{searchButtonText}</button>
        </FormLayout>
            </div> 
    )
}