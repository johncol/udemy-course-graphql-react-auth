import React from 'react';
import { Redirect } from 'react-router';
import { useQuery } from '@apollo/react-hooks';

import { Query } from './../../graphql';

export const forNotLoggedUsers = ComponentForNotLoggedUsers => {
  return props => {
    const { data, loading } = useQuery(Query.currentUser);
    if (loading) {
      return null;
    }

    if (data.currentUser) {
      return <Redirect to="profile" />;
    }

    return <ComponentForNotLoggedUsers {...props} />;
  };
};
