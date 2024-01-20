import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import Navbar from './Navbar';
import { useState } from 'react';
import LoginContainer from './LoginContainer';
import { View } from './View';
import AddSubmission from './AddSubmission';
import { HandleSubmission } from './HandleSubmission';
import { ServerTest } from './ServerTest';
import { NewSubmissionTab } from './Components/NewSubmissionTab';
import { Test } from './Components/Test';
import { AccountCreation } from './Components/AccountCreation';


function App() {
  // the initial state of the webpage is the login page
  const [currentPage, setCurrentPage] = useState('login');
  const [userHasAccount, setUserHasAccount] = useState(false);
  const [userCreates, setUserCreates] = useState(false);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleLoginStatus = () => {
    setUserHasAccount((prevUserHasAccount) => !prevUserHasAccount);
  };

  const handleOnCreate=()=>{
    setUserCreates(userCreates ? false : true)

  };

  return (
    <AppProvider i18n={enTranslations}>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <header>
        <Navbar onNavigate={handleNavigate} />
      </header>
      <main>
        {/* Render LoginContainer if the user is on the 'login' page and does not have an account */}
        {currentPage === 'login' && !userHasAccount && !userCreates && (
          <LoginContainer onLogin={handleLoginStatus} onCreate={handleOnCreate} />
        )}

        {/* Render AccountCreation if the user has an account */}
        {userHasAccount && currentPage==='login' && <AccountCreation></AccountCreation>}
        {userCreates && currentPage==='login' && <AccountCreation></AccountCreation>}

        {/* TODO: implement a means of showing admin-only content and user-accessible content */}
        
        {/* Other components based on currentPage */}
        {currentPage === 'view' && <View></View>}
        {currentPage === 'addSubmission' && <AddSubmission></AddSubmission>}
        {currentPage === 'handleSubmission' && <HandleSubmission></HandleSubmission>}
        {currentPage === 'servertest' && <ServerTest></ServerTest>}
        {currentPage === 'newSubTab' && <NewSubmissionTab></NewSubmissionTab>}
        {currentPage === 'test' && <Test></Test>}
      </main>
    </AppProvider>
  );
}

export default App;
