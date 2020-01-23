import React from 'react';

import { Header } from './Header';

export const App = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
    </div>
  );
};
