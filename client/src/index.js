import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { ApolloProvider } from '@apollo/react-hooks'
import Client from './apolloClient';

ReactDOM.render(
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);