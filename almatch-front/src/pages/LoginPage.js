import React from 'react';
import AuthBox from '../components/auth/AuthBox';
import AuthForm from '../components/auth/AuthForm';

const LoginPage = () => {
  return(
    <AuthBox>
      <AuthForm type='login'/>
    </AuthBox>
  );
};

export default LoginPage;