import submissionCard from './AddSubmissionForm.module.css'
import text from './AddSubmissionForm.module.css'

function AddSubmisionTitle() {
    const addSubmissionMessage = "Already submitted? View all submissions ";
  return (
    <div className={submissionCard.submissionCard}>
        <h3 className={text.text}> {addSubmissionMessage}<a href="">here</a></h3>
      </div>
  );
}
export default AddSubmisionTitle;