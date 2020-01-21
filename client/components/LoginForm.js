import React from 'react';

import { AuthForm } from './AuthForm';

export const LoginForm = () => {
  const login = credentials => console.log('credentials:', credentials);
  return <AuthForm title="Login" onSubmit={login}></AuthForm>;
};
