import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { Mutation } from './../graphql';
import { AuthForm } from './AuthForm';

export const LoginForm = () => {
  const [loginMutation] = useMutation(Mutation.login);

  return <AuthForm title="Login" onSubmitMutation={loginMutation}></AuthForm>;
};
