import React, { useState } from 'react';

export const AuthForm = ({ title, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ email, password });
  };

  const updateEmail = event => setEmail(event.target.value);
  const updatePassword = event => setPassword(event.target.value);

  return (
    <div className="row auth-form">
      <form onSubmit={handleSubmit} className="col s4">
        <h3>{title}</h3>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input id="email" value={email} onChange={updateEmail} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={updatePassword} />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};
