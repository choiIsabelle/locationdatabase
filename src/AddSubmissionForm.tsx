import {FormLayout, TextField} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import styled from 'styled-components';
import text from './AddSubmissionForm.module.css'
import submissionButton from './AddSubmissionForm.module.css'
import submissionCard from './AddSubmissionForm.module.css'
import textfield from './AddSubmissionForm.module.css'
import AddSubmisionTitle from './AddSubmissionTitle';

export const AddSubmissionForm=()=> {

    const StyledTextField = styled.div`
    font-family: font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    `
    const [newsletter, setNewsletter] = useState(false);
    const [email, setEmail] = useState('');
  
    const handleSubmit = useCallback(() => {
      setEmail('');
      setNewsletter(false);
    }, []);
  
    const handleNewsLetterChange = useCallback(
      (value: boolean) => setNewsletter(value),
      [],
    );
  
    const handleEmailChange = useCallback((value: string) => setEmail(value), []);
    return(
        <div>
            <AddSubmisionTitle></AddSubmisionTitle>
            <div className={submissionCard.submissionCard}>
                <h4> Add a new submission using the form below</h4>
        <div className={text.text}>
        <FormLayout>
            <div className={textfield.textfield}>
        <TextField
          value={email}
          onChange={handleEmailChange}
          label="Email"
          type="email"
          maxHeight={20}
          autoComplete="email"
        />
        </div>
        <div className={textfield.textfield}>
        <TextField
        label="Enter submission details"
        autoComplete="password"
        />
        </div>
        <div className={textfield.textfield}>
        <TextField
        label="Enter submission details"
        autoComplete="password"
        />
        </div>
        <button className={submissionButton.submissionButton} onClick={handleSubmit}>Submit</button>
      </FormLayout>
      </div>
      </div>
      </div>
  );        
}