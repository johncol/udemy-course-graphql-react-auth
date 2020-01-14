import { gql } from 'apollo-boost';

export const currentUser = gql`
  query {
    currentUser {
      id
      email
      name
    }
  }
`;
