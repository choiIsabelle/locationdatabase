import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import Navbar from './Navbar';
import { useState } from 'react';
import LoginPage from './LoginPage';
import Page from './PageTypes';
import { View } from './View';
import AddSubmission from './AddSubmission';


function App(){
  // default view of the application is the login page
  const[currentPage, setCurrentPage] =useState('login');

  const handleNavigate=(page:Page)=>{
    setCurrentPage(page);
    }
  
  return(
    <AppProvider i18n={enTranslations}>
      <header>
        <Navbar onNavigate={handleNavigate} />
      </header>
      <main>
        {currentPage == 'login' && <LoginPage></LoginPage>}
        {/* TODO create implementation for object creation page */}
        {currentPage == 'view' && <View></View>}
        {currentPage == 'addSubmission' && <AddSubmission></AddSubmission>}
      </main>
    </AppProvider>
  )
}
export default App;