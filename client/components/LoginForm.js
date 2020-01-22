import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { Mutation, Query } from './../graphql';
import { AuthForm } from './AuthForm';
import { forNotLoggedUsers } from './auth/forNotLoggedUsers';

export const LoginForm = forNotLoggedUsers(() => {
  const [errors, setErrors] = useState([]);
  const [loginMutation] = useMutation(Mutation.login);

  const login = credentials => {
    loginMutation({
      variables: credentials,
      refetchQueries: [{ query: Query.currentUser }]
    })
      .then(() => {
        setErrors([]);
      })
      .catch(error => {
        const { graphQLErrors } = error;
        setErrors(graphQLErrors.map(error => error.message));
      });
  };

  return <AuthForm title="Login" onSubmit={login} errors={errors}></AuthForm>;
});
