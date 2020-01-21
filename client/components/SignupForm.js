import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { Mutation, Query } from './../graphql';
import { AuthForm } from './AuthForm';

export const SignupForm = () => {
  const [errors, setErrors] = useState([]);

  const [signupMutation] = useMutation(Mutation.signup);
  const signup = credentials => {
    signupMutation({
      variables: credentials,
      refetchQueries: [{ query: Query.currentUser }]
    })
      .then(({ data }) => {
        console.log(`${data.signup.name} signup successfully`);
        setErrors([]);
      })
      .catch(error => {
        const { graphQLErrors } = error;
        setErrors(graphQLErrors.map(error => error.message));
      });
  };

  return <AuthForm title="Sign Up" onSubmit={signup} errors={errors}></AuthForm>;
};
