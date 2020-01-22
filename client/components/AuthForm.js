import React, { useState, useEffect } from 'react';

import { Query } from './../graphql';
import { forNotLoggedUsers } from './auth/forNotLoggedUsers';

export const AuthForm = forNotLoggedUsers(({ title, onSubmitMutation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (password && errors.length > 0) {
      setPassword('');
    }
  }, [errors]);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmitMutation({
      variables: { email, password },
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

  const updateEmail = event => setEmail(event.target.value);
  const updatePassword = event => setPassword(event.target.value);

  return (
    <div className="row auth-form">
      <FormErrors errors={errors} />
      <form onSubmit={handleSubmit} className="col s4">
        <h3>{title}</h3>
        <div className="input-field">
          <input id="email" value={email} onChange={updateEmail} placeholder="Email" />
        </div>
        <div className="input-field">
          <input type="password" id="password" value={password} onChange={updatePassword} placeholder="Password" />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
});

const FormErrors = ({ errors }) => {
  if (errors.length === 0) {
    return null;
  }

  return (
    <div className="errors">
      {errors.map(error => (
        <div key={error}>{error}</div>
      ))}
    </div>
  );
};
