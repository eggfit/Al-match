import React from 'react';
import AuthBox from '../components/auth/AuthBox';
import AuthForm from '../components/auth/AuthForm';

const RegisterPage = () => {
  return (
    <AuthBox>
      <AuthForm type='register'/>
    </AuthBox>);
};


export default RegisterPage;