import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks'
import client from '../apolloClient';
import Home from './Home';

const App = () => (
  <>
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  </>
)

export default App;
