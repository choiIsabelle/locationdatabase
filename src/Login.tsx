import { FormLayout, TextField } from '@shopify/polaris';
import { useState } from 'react';
import loginStyles from './LoginStyle.module.css'
import loginTextField from './LoginStyle.module.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameInput = (newValue: string) => {
    setUsername(newValue);
  };

  const handlePasswordInput = (newValue: string) => {
    setPassword(newValue);
  };

  return (
    <div className={loginStyles.loginStyles}>
    <FormLayout>
        <div className={loginTextField.loginTextField}> 
      <TextField
        label="Account email"
        value={username}
        onChange={handleUserNameInput}
        autoComplete="off"
      />
      </div>
      <div className={loginTextField.loginTextField}> 
      <TextField
        type="email"
        label="Account password"
        value={password}
        onChange={handlePasswordInput}
        autoComplete="off"
      />
    </div>
    </FormLayout>
    </div>
  );
}

export default Login;
