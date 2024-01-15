import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import Navbar from './Navbar';
import { useState } from 'react';
import LoginPage from './LoginPage';
import Page from './PageTypes';
import { View } from './View';
import AddSubmission from './AddSubmission';
import { HandleSubmission } from './HandleSubmission';
import { ServerTest } from './ServerTest';


function App(){
  // the initial state of the webpage is the login page
  const[currentPage, setCurrentPage] =useState('login');
  const[userRegistrationState, setUserRegistrationState] = useState('hasAccount');

  const handleNavigate=(page:Page)=>{
    setCurrentPage(page);
    }
  
  return(
    <AppProvider i18n={enTranslations}>
      <header>
        {/* when I render the Navbar, I pass in a default value representing the current page */}
        <Navbar onNavigate={handleNavigate} />
      </header>
      <main>
        {currentPage == 'login' && <LoginPage></LoginPage>}
        {userRegistrationState == 'hasAccount'}
        {currentPage == 'view' && <View></View>}
        {currentPage == 'addSubmission' && <AddSubmission></AddSubmission>}
        {currentPage == 'handleSubmission' && <HandleSubmission></HandleSubmission>}
        {currentPage == 'servertest' && <ServerTest></ServerTest>}
      </main>
    </AppProvider>
  )
}
export default App;