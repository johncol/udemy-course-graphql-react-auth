import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id
});

const link = new HttpLink({
  uri: '/graphql',
  credentials: 'same-origin'
});

const client = new ApolloClient({ cache, link });

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>Auth Starter</div>;
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
