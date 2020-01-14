import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { Query } from './../graphql/queries';

export const App = ({ children }) => {
  const { data, loading } = useQuery(Query.currentUser);
  if (loading) {
    return null;
  }

  const { currentUser } = data;
  const links = getLinks(currentUser);

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
      <main>{children}</main>
    </div>
  );
};

const getLinks = currentUser => {
  if (currentUser) {
    return [<a>Logout</a>];
  }

  return [<Link to="/login">Login</Link>, <Link to="/signup">Signup</Link>];
};
