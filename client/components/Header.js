import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { Query, Mutation } from './../graphql';

export const Header = () => {
  const { data, loading } = useQuery(Query.currentUser);

  const [logout] = useMutation(Mutation.logout, {
    refetchQueries: [{ query: Query.currentUser }]
  });

  if (loading) {
    return null;
  }

  const { currentUser } = data;
  const links = getLinks(currentUser, logout);

  return (
    <header>
      <nav>
        <ul>{links.map(toListItems)}</ul>
      </nav>
    </header>
  );
};

const toListItems = (link, index) => <li key={index}>{link}</li>;

const getLinks = (currentUser, logout) => {
  if (currentUser) {
    return [<a onClick={logout}>Logout</a>];
  }

  return [<Link to="/login">Login</Link>, <Link to="/signup">Signup</Link>];
};
