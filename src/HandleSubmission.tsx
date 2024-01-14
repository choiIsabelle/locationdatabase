import { HandleSubmissionForm } from "./HandleSubmissionForm";
import { HandleSubmissionDeletionOptionsContainer } from "./HandleSubmissionOptionsContainer";
export const HandleSubmission=()=>{
    return(
        <div>
            <HandleSubmissionForm></HandleSubmissionForm>
            <HandleSubmissionDeletionOptionsContainer></HandleSubmissionDeletionOptionsContainer>
        </div>
    );
}