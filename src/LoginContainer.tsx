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

const handleLinkClick=()=>{

}

function LoginContainer(){
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
                    Sign into your account
                  </Text>
                </div>
                <Login />
                  <button className={loginButton.loginButton} onClick={handleOnClick}>Login as a user</button>
                  <button className={loginButton.loginButton} onClick={handleOnClick}>Create new user account</button>
                  <p className={text.text}> <a href='' onClick={handleLinkClick}>Forgot your account details? </a></p>
              </LegacyCard>
            </Layout.Section>
          </Layout>
        </Page>
      </div>
      

    );
}

export default LoginContainer;