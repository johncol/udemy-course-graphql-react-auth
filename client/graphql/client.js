import { InMemoryCache } from '@apollo/client';
import ApolloClient from 'apollo-boost';

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id
});

const uri = '/graphql';

const credentials = 'same-origin';

export const client = new ApolloClient({
  cache,
  uri,
  credentials
});
