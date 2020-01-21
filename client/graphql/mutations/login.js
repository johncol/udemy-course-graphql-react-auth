import { gql } from 'apollo-boost';

export const login = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;
