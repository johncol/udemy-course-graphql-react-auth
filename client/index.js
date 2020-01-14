import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache, createHttpLink } from '@apollo/client';
import ApolloClient from 'apollo-boost';

import { App } from './components/App';

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id
});

const link = createHttpLink({
  uri: '/graphql',
  credentials: 'same-origin'
});

const client = new ApolloClient({ cache, link });

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <App>
        <div>App</div>
      </App>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
