import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { Mutation, Query } from './../graphql';
import { AuthForm } from './AuthForm';

export const LoginForm = () => {
  const [loginMutation] = useMutation(Mutation.login);
  const login = credentials => {
    loginMutation({
      variables: credentials,
      refetchQueries: [{ query: Query.currentUser }]
    })
      .then(({ data }) => console.log(`${data.login.name} logged successfully`))
      .catch(error => console.log(error.message));
  };
  return <AuthForm title="Login" onSubmit={login}></AuthForm>;
};
