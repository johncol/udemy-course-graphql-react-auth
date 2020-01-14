import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache, createHttpLink } from '@apollo/client';
import ApolloClient from 'apollo-boost';

import { App } from './components/App';
import { Welcome } from './components/Welcome';

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
      <BrowserRouter>
        <Route path="/">
          <div className="container">
            <App>
              <Welcome />
            </App>
          </div>
        </Route>
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
