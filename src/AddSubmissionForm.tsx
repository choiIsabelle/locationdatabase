import {FormLayout, Spinner, TextField} from '@shopify/polaris';
import {useState, useCallback, useEffect} from 'react';
import text from './AddSubmissionForm.module.css'
import submissionButton from './AddSubmissionForm.module.css'
import submissionCard from './AddSubmissionForm.module.css'
import textfield from './AddSubmissionForm.module.css'
import AddSubmisionTitle from './AddSubmissionTitle';
import h3 from './AddSubmissionForm.module.css';

export const AddSubmissionForm=()=> {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmission =()=>{
      setIsSubmitting(isSubmitting? false : true)
    }

    useEffect(()=>{
      const timeoutId = setTimeout(() => {
        setIsSubmitting(false);
      }, 500);
      return () => clearTimeout(timeoutId);

  }, [isSubmitting])
  
    // const handleSubmit = useCallback(() => {
    //   setEmail('');
    //   setNewsletter(false);
    // }, []);
  
  
    const handleEmailChange = useCallback((value: string) => setEmail(value), []);
    return(
        <div>
            <AddSubmisionTitle></AddSubmisionTitle>
            <div className={submissionCard.submissionCard}>
                <h3 className={h3.h3}> Add a new submission using the form below</h3>
        <div className={text.text}>
        <FormLayout>
            <div className={textfield.textfield}>
        <TextField
          value={email}
          onChange={handleEmailChange}
          label="Name"
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
        </div>
        <button className={submissionButton.submissionButton} onClick={handleSubmission}>Submit</button>
        {isSubmitting && <div style={{width:'5%', marginLeft:'1.5rem', marginTop:'0.5rem'}}><Spinner></Spinner></div>}
      </FormLayout>
      </div>
      </div>
      </div>
  );        
}