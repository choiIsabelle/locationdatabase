import {Page, Layout, LegacyCard, Text} from '@shopify/polaris';
import {Avatar} from '@shopify/polaris';
import Login from './Login.tsx';
import loginContainer from './LoginStyle.module.css';
import loginTitle from './LoginStyle.module.css';
import loginButton from './LoginStyle.module.css';
import avatar from './LoginStyle.module.css'
import text from './LoginStyle.module.css'

const handleOnClick = () => {
  //TODO implement verification
};


const LoginContainer =({ onLogin })=>{
  const loginBtn = 'Login as a user'
  const createBtn = 'Create new user account'
  const loginMessage: string ="Sign into your account";
  const forgotAccountMessage: string ="Forgot your account details? "

    return(
        <div className={loginContainer.loginContainer}>
        <Page fullWidth>
          <Layout>
            <Layout.Section>
              <div className={avatar.avatar}>
              <Avatar customer></Avatar>
              </div>
              <LegacyCard >
                <div className={loginTitle.loginTitle}>
                  <Text as="h2" variant="bodyMd">
                    {loginMessage}
                  </Text>
                </div>
                <Login />
                  <button className={loginButton.loginButton} onClick={()=>onLogin(true)}>{loginBtn}</button>
                  <button className={loginButton.loginButton}>{createBtn}</button>
                  <p className={text.text}> <a href=''>{forgotAccountMessage}</a></p>
              </LegacyCard>
            </Layout.Section>
          </Layout>
        </Page>
      </div>
      

    );
}

export default LoginContainer;