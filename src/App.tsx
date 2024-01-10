// import { useBreakpoints, Page, BlockStack, InlineGrid, Box, Card, TextField, Divider, Text, AppProvider } from "@shopify/polaris";
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import Navbar from './Navbar';
import { useState } from 'react';
import LoginPage from './LoginPage';
import Page from './PageTypes';


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
        {/* {currentPage == 'login' && <LoginPage></LoginPage>} */}
      </main>
    </AppProvider>
  )
}
export default App;