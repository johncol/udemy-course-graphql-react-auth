import React from 'react';

import { forLoggedUsers } from './auth/forLoggedUsers';

export const Profile = forLoggedUsers(({ currentUser }) => {
  const { id, name, email } = currentUser;
  return (
    <div className="row">
      <div className="col s12 m12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <Title name={name} />
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
});

const Title = ({ name }) => {
  return <span className="card-title">Welcome {name ? name : 'Unnamed dude'}!</span>;
};
