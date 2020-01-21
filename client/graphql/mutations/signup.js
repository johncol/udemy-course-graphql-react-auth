import { gql } from 'apollo-boost';

export const signup = gql`
  mutation Signup($email: String, $password: String) {
    signup(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;
