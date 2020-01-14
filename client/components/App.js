import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Query } from './../graphql/queries';

export const App = ({ children }) => {
  const { data, loading } = useQuery(Query.currentUser);
  if (loading) {
    return null;
  }

  const { currentUser } = data;

  if (!currentUser) {
    return (
      <div className="container">
        <header>Login/Signup</header>
        <main>{children}</main>
      </div>
    );
  }

  return (
    <div className="container">
      <header>Logout</header>
      <main>{children}</main>
    </div>
  );
};
