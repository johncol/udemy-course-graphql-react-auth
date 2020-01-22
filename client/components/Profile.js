import React from 'react';
import { Redirect } from 'react-router';
import { useQuery } from '@apollo/react-hooks';

import { Query } from './../graphql';

export const Profile = ({}) => {
  const { data, loading } = useQuery(Query.currentUser);

  if (loading) {
    return null;
  }

  if (!data.currentUser) {
    return <Redirect to="login" />;
  }

  const {
    currentUser: { id, name, email }
  } = data;
  return (
    <div className="row">
      <div className="col s12 m12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Welcome {name ? name : 'Unnamed dude'}!</span>
            <table>
              <tbody>
                <tr>
                  <th>ID</th>
                  <td>{id}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
