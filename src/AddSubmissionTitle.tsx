import {CalloutCard} from '@shopify/polaris';
import submissionCard from './AddSubmissionForm.module.css'
import text from './AddSubmissionForm.module.css'
import React from 'react';

function AddSubmisionTitle() {
  return (
    <div className={submissionCard.submissionCard}>
        <h3 className={text.text}> Already submitted? View all submissions here:</h3>
      </div>
  );
}
export default AddSubmisionTitle;