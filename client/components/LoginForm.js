import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useMutation, useQuery } from '@apollo/react-hooks';

import { Mutation, Query } from './../graphql';
import { AuthForm } from './AuthForm';

export const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [logged, setLogged] = useState(false);
  const { data, loading } = useQuery(Query.currentUser);
  const [loginMutation] = useMutation(Mutation.login);

  if (loading) {
    return null;
  }

  if (data.currentUser || logged) {
    return <Redirect to="profile" />;
  }

  const login = credentials => {
    loginMutation({
      variables: credentials,
      refetchQueries: [{ query: Query.currentUser }]
    })
      .then(() => {
        setLogged(true);
        setErrors([]);
      })
      .catch(error => {
        const { graphQLErrors } = error;
        setErrors(graphQLErrors.map(error => error.message));
      });
  };

  return <AuthForm title="Login" onSubmit={login} errors={errors}></AuthForm>;
};
