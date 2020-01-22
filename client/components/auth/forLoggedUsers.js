import React from 'react';
import { Redirect } from 'react-router';
import { useQuery } from '@apollo/react-hooks';

import { Query } from './../../graphql';

export const forLoggedUsers = ComponentForLoggedUsers => {
  return props => {
    const { data, loading } = useQuery(Query.currentUser);
    if (loading) {
      return null;
    }

    if (!data.currentUser) {
      return <Redirect to="login" />;
    }

    return <ComponentForLoggedUsers {...props} currentUser={data.currentUser} />;
  };
};
