import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { Mutation } from './../graphql';
import { AuthForm } from './AuthForm';

export const SignupForm = () => {
  const [signupMutation] = useMutation(Mutation.signup);

  return <AuthForm title="Sign Up" onSubmitMutation={signupMutation}></AuthForm>;
};
