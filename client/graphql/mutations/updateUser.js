import { gql } from 'apollo-boost';

export const updateUser = gql`
  mutation UpdateUser($name: String) {
    updateUser(name: $name) {
      id
      name
      email
    }
  }
`;
