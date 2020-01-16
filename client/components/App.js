import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { Query, Mutation } from './../graphql';

export const App = ({ children }) => {
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
    <div>
      <header>
        <nav>
          <ul>
            {links.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <h2>Welcome {currentUser ? currentUser.name : 'visitor'}</h2>
        <React.Fragment>{children}</React.Fragment>
      </main>
    </div>
  );
};

const getLinks = (currentUser, logout) => {
  if (currentUser) {
    return [<a onClick={logout}>Logout</a>];
  }

  return [<Link to="/login">Login</Link>, <Link to="/signup">Signup</Link>];
};
