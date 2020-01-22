import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import { client } from './graphql';
import { App } from './components/App';
import { LoginForm } from './components/LoginForm';
import { SignupForm } from './components/SignupForm';
import { Profile } from './components/Profile';

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <App>
          <Route path="/login">
            <LoginForm />
          </Route>

          <Route path="/signup">
            <SignupForm />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>
        </App>
      </HashRouter>
    </ApolloProvider>
  );
};

const container = document.querySelector('#root');
ReactDOM.render(<Root />, container);
