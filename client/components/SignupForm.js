import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useMutation, useQuery } from '@apollo/react-hooks';

import { Mutation, Query } from './../graphql';
import { AuthForm } from './AuthForm';

export const SignupForm = () => {
  const [errors, setErrors] = useState([]);
  const [signedUp, setSignedUp] = useState(false);
  const { data, loading } = useQuery(Query.currentUser);
  const [signupMutation] = useMutation(Mutation.signup);

  if (loading) {
    return null;
  }

  if (data.currentUser || signedUp) {
    return <Redirect to="profile" />;
  }

  const signup = credentials => {
    signupMutation({
      variables: credentials,
      refetchQueries: [{ query: Query.currentUser }]
    })
      .then(() => {
        setErrors([]);
        setSignedUp(true);
      })
      .catch(error => {
        const { graphQLErrors } = error;
        setErrors(graphQLErrors.map(error => error.message));
      });
  };

  return <AuthForm title="Sign Up" onSubmit={signup} errors={errors}></AuthForm>;
};
