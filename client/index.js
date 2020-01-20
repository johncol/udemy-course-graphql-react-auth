import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import { client } from './graphql';

import { App } from './components/App';

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Route path="/">
          <div className="container">
            <App></App>
          </div>
        </Route>
      </BrowserRouter>
    </ApolloProvider>
  );
};

const container = document.querySelector('#root');
ReactDOM.render(<Root />, container);
